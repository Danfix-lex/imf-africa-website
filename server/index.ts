import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import compression from 'compression';
import { User } from './models/index';

dotenv.config();

// Log all environment variables for debugging
console.log('Environment variables:');
console.log('- PORT:', process.env.PORT);
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');

const app = express();
// Use Render's PORT or default to 10000 (not 5000 to avoid conflicts)
const PORT: number = parseInt(process.env.PORT || '10000', 10);

// CORS configuration
const corsOptions = {
  origin: [
    process.env.CORS_ORIGIN || 'http://localhost:3000', 
    'http://localhost:3001',
    'http://localhost:3002',
    'https://imf-africa-website-frontend.onrender.com'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Caching middleware for static assets
const cacheMiddleware = (seconds: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.set('Cache-Control', `public, max-age=${seconds}`);
    next();
  };
};

// Middleware
app.use(compression()); // Add compression
app.use(helmet());
app.use(cors(corsOptions));

// Use morgan logging only in development
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('combined'));
}

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Apply caching to static assets
app.use('/api/gallery', cacheMiddleware(3600)); // Cache gallery API for 1 hour
app.use('/api/programs', cacheMiddleware(1800)); // Cache programs API for 30 minutes
app.use('/api/news', cacheMiddleware(1800)); // Cache news API for 30 minutes

// MongoDB connection with retry logic
const connectDB = async () => {
  try {
    // Use Render's MONGODB_URI or default to local
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/imf-africa';
    
    console.log('Attempting to connect to MongoDB with URI:', MONGODB_URI.replace(/:[^:@]+@/, ':***@')); // Hide password in logs
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Exit process with error code for Render to detect failure
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Middleware to verify JWT token
const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'imf-africa-secret-key') as any;
    const user = await User.findById(decoded.id).select('-password');
    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid or inactive user' });
    }
    (req as any).user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'IMF Africa Connect API is running' });
});

// Authentication Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      country,
      state,
      city,
      denomination,
      churchName,
      position
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      country,
      state,
      city,
      denomination,
      ministryName: churchName,
      position
    });

    await user.save();

    // Generate auth token
    const token = user.generateAuthToken();

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        country: user.country,
        isEmailVerified: user.isEmailVerified
      }
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    res.status(400).json({ error: error.message || 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and include password for comparison
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({ error: 'Account is deactivated. Please contact support.' });
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate auth token
    const token = user.generateAuthToken();

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        country: user.country,
        position: user.position,
        ministryName: user.ministryName,
        isEmailVerified: user.isEmailVerified
      }
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/auth/profile', authenticateToken, async (req: any, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.put('/api/auth/profile', authenticateToken, async (req: any, res) => {
  try {
    const updates = req.body;
    delete updates.password; // Don't allow password updates through this endpoint
    delete updates.email; // Don't allow email updates through this endpoint
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');
    
    res.json({ success: true, message: 'Profile updated successfully', user });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Profile update failed' });
  }
});

app.post('/api/auth/logout', authenticateToken, async (req: any, res) => {
  // For JWT, logout is handled client-side by removing the token
  // Here we could add token blacklisting if needed
  res.json({ success: true, message: 'Logged out successfully' });
});

// Protected Programs API
app.get('/api/programs', authenticateToken, (req, res) => {
  const programs = [
    {
      id: '1',
      title: 'Economic Growth Initiative',
      description: 'Supporting sustainable economic development through policy advice, capacity building, and financial assistance programs across African nations.',
      category: 'Economic Development',
      status: 'Active',
      countries: ['Kenya', 'Ghana', 'Rwanda', 'Nigeria'],
      budget: '$2.5B',
      startDate: '2023-01-01',
      endDate: '2026-12-31',
    },
    {
      id: '2',
      title: 'Capacity Building Programs',
      description: 'Comprehensive training and education programs for government officials, economists, and financial professionals.',
      category: 'Education',
      status: 'Active',
      countries: ['South Africa', 'Egypt', 'Morocco', 'Tunisia'],
      budget: '$800M',
      startDate: '2023-03-01',
      endDate: '2025-12-31',
    },
    {
      id: '3',
      title: 'Private Sector Development',
      description: 'Fostering entrepreneurship and supporting private sector growth through innovative financing solutions and partnerships.',
      category: 'Business Development',
      status: 'Active',
      countries: ['Ethiopia', 'Tanzania', 'Uganda', 'Zambia'],
      budget: '$1.8B',
      startDate: '2023-06-01',
      endDate: '2027-05-31',
    },
  ];
  
  res.json(programs);
});

// Protected News API
app.get('/api/news', authenticateToken, (req, res) => {
  const news = [
    {
      id: '1',
      title: 'IMF Approves $500M Economic Support Package for West Africa',
      excerpt: 'New funding will support infrastructure development and economic reforms in the region.',
      content: 'The International Monetary Fund has approved a comprehensive $500 million economic support package...',
      author: 'IMF Communications',
      publishDate: '2024-01-15',
      category: 'Economic Policy',
      featured: true,
    },
    {
      id: '2',
      title: 'Digital Financial Services Initiative Launches Across 10 African Countries',
      excerpt: 'Promoting financial inclusion through digital payment systems and mobile banking solutions.',
      content: 'A groundbreaking digital financial services initiative has been launched across ten African countries...',
      author: 'Digital Finance Team',
      publishDate: '2024-01-10',
      category: 'Digital Finance',
      featured: false,
    },
  ];
  
  res.json(news);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Here you would typically save to database and send email
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon.' 
  });
});

// Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  // Here you would typically save to database and add to mailing list
  console.log('Newsletter subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to newsletter.' 
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Log errors only in development
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Production optimizations
if (process.env.NODE_ENV === 'production') {
  // Increase timeout for production
  app.use((req, res, next) => {
    res.setTimeout(30000, () => {
      res.status(408).json({ error: 'Request timeout' });
    });
    next();
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`IMF Africa Connect API server running on port ${PORT}`);
});

// Add a simple health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default app;