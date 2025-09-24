# IMF Africa Connect Website

A modern, professional website for the International Monetary Fund's African economic development initiatives. Built with Next.js, Material-UI, Framer Motion, and a full-stack backend.

## 🚀 Features

### Frontend
- **Modern Design**: Clean, professional interface with Material-UI components
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full type safety and better development experience
- **Performance Optimized**: Next.js with Turbopack for fast builds and hot reloading

### Backend API
- **RESTful API**: Express.js server with comprehensive endpoints
- **Database Integration**: MongoDB with Mongoose ODM
- **Security**: Helmet.js, CORS, and input validation
- **Contact Forms**: Newsletter subscription and contact form handling
- **Content Management**: Dynamic content for programs, news, and resources

### Key Sections
- **Hero Section**: Animated statistics and call-to-action
- **About Section**: IMF Africa Connect initiative overview
- **Programs Section**: Economic development programs showcase
- **Contact & Footer**: Newsletter signup and contact information

## 🛠 Technology Stack

### Frontend
- Next.js 15.5.3 (React 19)
- Material-UI (MUI) 7.3.2
- Framer Motion 12.23.15
- TypeScript
- Tailwind CSS (for additional styling)

### Backend
- Node.js
- Express.js 5.1.0
- MongoDB with Mongoose 8.18.1
- TypeScript
- Security middleware (Helmet, CORS, Morgan)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (local or cloud)

### Frontend Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

### Backend Setup
```bash
# Install backend dependencies (already included)
npm install

# Copy environment variables
cp .env.example .env

# Configure your environment variables in .env
# MONGODB_URI=mongodb://localhost:27017/imf-africa
# PORT=5000

# Run backend server in development
npm run server:dev

# Build and run production server
npm run server:build
npm run server:start
```

## 🌐 Development URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 📁 Project Structure

```
imf-africa-website/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout with MUI providers
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── HeroSection.tsx  # Hero with animations
│   │   ├── AboutSection.tsx # About IMF Africa
│   │   └── Footer.tsx       # Footer with contact info
│   └── theme/
│       └── theme.ts         # MUI theme configuration
├── server/
│   ├── index.ts             # Express server setup
│   └── models/
│       └── index.ts         # MongoDB models
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 Design Features

### Color Scheme
- **Primary**: IMF Blue (#1976d2)
- **Secondary**: Complementary Orange (#f57c00)
- **Background**: Clean whites and subtle gradients

### Typography
- **Font**: Roboto (Google Fonts)
- **Hierarchy**: Clear heading structure (H1-H6)
- **Readability**: Optimized line heights and spacing

### Animations
- **Scroll Animations**: Elements animate into view
- **Hover Effects**: Interactive button and card animations
- **Background Elements**: Subtle floating animations
- **Staggered Animations**: Sequential element appearances

## 🔧 API Endpoints

### Programs
- `GET /api/programs` - List all programs
- `GET /api/programs/:id` - Get specific program

### News & Updates
- `GET /api/news` - Get news articles
- `GET /api/news/:id` - Get specific article

### Contact & Newsletter
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Newsletter subscription

### Health Check
- `GET /api/health` - API status check

## 🚀 Deployment

### Deploying to Render

This project is configured for deployment to [Render](https://render.com/). Follow these steps:

1. **Create a Render Account**
   - Go to [Render](https://render.com/) and sign up for an account

2. **Prepare Your Repository**
   - Push your code to a GitHub repository
   - Make sure your repository includes all necessary files

3. **Deploy the Backend API**
   - In Render Dashboard, click "New Web Service"
   - Connect your GitHub repository
   - Set the following:
     - Name: `imf-africa-backend`
     - Environment: `Node`
     - Build Command: `npm run server:build`
     - Start Command: `npm run server:start`
   - Add Environment Variables:
     - `NODE_ENV`: `production`
     - `PORT`: `10000`
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure secret key
     - `CORS_ORIGIN`: `https://imf-africa-frontend.onrender.com`

4. **Deploy the Frontend**
   - In Render Dashboard, click "New Static Site" or "New Web Service"
   - Connect your GitHub repository
   - Set the following:
     - Name: `imf-africa-frontend`
     - Environment: `Node`
     - Build Command: `npm run build`
     - Start Command: `npm start`
   - Add Environment Variables:
     - `NODE_ENV`: `production`
     - `NEXT_PUBLIC_API_URL`: The URL of your deployed backend (e.g., `https://imf-africa-backend.onrender.com`)

5. **Configure Auto-Deployment**
   - Both services will automatically redeploy when you push to your connected branch

### Environment Variables

For production deployment, you'll need to set these environment variables:

**Backend:**
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Server port (Render will provide this)
- `CORS_ORIGIN`: Frontend URL
- `NODE_ENV`: `production`

**Frontend:**
- `NEXT_PUBLIC_API_URL`: Backend API URL

### Troubleshooting Deployment Issues

If you encounter "Exited with status 2" errors during deployment:

1. **Check Build Logs**: Look for specific error messages in the build logs
2. **Verify Dependencies**: Ensure all required dependencies are in [package.json](file:///c:/Users/USER/imf-africa-website/package.json)
3. **Check Environment Variables**: Make sure all required environment variables are set
4. **Verify Build Commands**: Ensure the build commands in [render.yaml](file:///c:/Users/USER/imf-africa-website/render.yaml) match your [package.json](file:///c:/Users/USER/imf-africa-website/package.json) scripts
5. **Check File Paths**: Ensure all file paths in your TypeScript configuration are correct

Common fixes:
- Add missing dependencies to [package.json](file:///c:/Users/USER/imf-africa-website/package.json)
- Fix TypeScript compilation errors
- Ensure the [tsconfig.json](file:///c:/Users/USER/imf-africa-website/server/tsconfig.json) is properly configured
- Verify MongoDB connection string format

## 📝 Environment Variables

Create a `.env` file in the root directory:

```
# Database
MONGODB_URI=mongodb://localhost:27017/imf-africa

# Server
PORT=5000
NODE_ENV=development

# Security
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email africa-connect@imf.org or create an issue on GitHub.

## 🌟 Acknowledgments

- International Monetary Fund for the initiative
- Material-UI team for the excellent component library
- Framer Motion for smooth animations
- Next.js team for the amazing framework

---

**Built with ❤️ for Africa's Economic Future**
