import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Program Interface
export interface IProgram extends Document {
  title: string;
  description: string;
  category: string;
  status: 'Active' | 'Completed' | 'Planned' | 'Suspended';
  countries: string[];
  budget: string;
  startDate: Date;
  endDate: Date;
  objectives: string[];
  achievements: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Program Schema
const ProgramSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Completed', 'Planned', 'Suspended'],
    default: 'Planned',
  },
  countries: [{
    type: String,
    required: true,
  }],
  budget: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  objectives: [{
    type: String,
  }],
  achievements: [{
    type: String,
  }],
}, {
  timestamps: true,
});

// News Interface
export interface INews extends Document {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
  category: string;
  featured: boolean;
  tags: string[];
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// News Schema
const NewsSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  tags: [{
    type: String,
  }],
  imageUrl: {
    type: String,
  },
}, {
  timestamps: true,
});

// Contact Interface
export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'New' | 'In Progress' | 'Resolved';
  createdAt: Date;
  updatedAt: Date;
}

// Contact Schema
const ContactSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Resolved'],
    default: 'New',
  },
}, {
  timestamps: true,
});

// Newsletter Interface
export interface INewsletter extends Document {
  email: string;
  subscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Newsletter Schema
const NewsletterSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  subscribed: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// User Interface
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  country: string;
  state?: string;
  city?: string;
  denomination?: string;
  churchName?: string;
  position?: string;
  isActive: boolean;
  isEmailVerified: boolean;
  emailVerificationToken?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateAuthToken(): string;
}

// African Countries List
const AFRICAN_COUNTRIES = [
  'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon',
  'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Democratic Republic of the Congo', 
  'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia',
  'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya',
  'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia',
  'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone',
  'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda',
  'Zambia', 'Zimbabwe'
];

// User Schema
const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  phone: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    enum: AFRICAN_COUNTRIES,
  },
  state: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  denomination: {
    type: String,
    trim: true,
  },
  churchName: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    trim: true,
    enum: ['Pastor', 'Minister', 'Church Leader', 'Evangelist', 'Missionary', 'Church Member', 'Student', 'Other'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: {
    type: String,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  lastLogin: {
    type: Date,
  },
}, {
  timestamps: true,
});

// Password hashing middleware
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password as string, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password as string);
};

// Generate JWT token method
UserSchema.methods.generateAuthToken = function(): string {
  const payload = {
    id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    country: this.country,
  };
  
  return jwt.sign(payload, process.env.JWT_SECRET || 'imf-africa-secret-key', {
    expiresIn: '7d',
  });
};

// Export models
export const User = mongoose.model<IUser>('User', UserSchema);
export const Program = mongoose.model<IProgram>('Program', ProgramSchema);
export const News = mongoose.model<INews>('News', NewsSchema);
export const Contact = mongoose.model<IContact>('Contact', ContactSchema);
export const Newsletter = mongoose.model<INewsletter>('Newsletter', NewsletterSchema);