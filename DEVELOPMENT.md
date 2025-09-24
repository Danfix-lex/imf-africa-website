# Development Guide

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - Copy the provided `.env` file or create one with the required variables
   - Make sure MongoDB is running locally or provide a cloud connection string

3. **Start Development Servers**
   ```bash
   # Terminal 1: Start the frontend (Next.js)
   npm run dev
   
   # Terminal 2: Start the backend API (Express.js)
   npm run server:dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

## Current Status

### ✅ Completed Components
- Header with authentication
- HeroSection with animated statistics
- StatisticsSection with counters
- AboutSection
- ProgramsSection with modal details
- NewsSection with search and filtering
- LeadershipSection
- TestimonialsSection with carousel
- RemittalsSection (placeholder for integration)
- CallToActionSection
- Footer with newsletter signup
- Authentication system (Login/Register forms)
- AuthContext for state management
- ProtectedRoute wrapper

### ✅ Backend Features
- Express server with security middleware
- MongoDB models for User, Program, News, Contact, Newsletter
- Authentication with JWT
- Password hashing with bcrypt
- User registration and login endpoints
- Protected routes

### 🚧 Areas to Complete/Enhance
1. Additional pages (About, Programs, Resources, News, Contact standalone pages)
2. Admin dashboard for content management
3. Email integration for contact forms and newsletters
4. File upload functionality for news images
5. Real image assets (currently using placeholder URLs)
6. SEO optimization
7. Error handling improvements
8. Loading states
9. Responsive design refinements
10. Accessibility improvements

## Development Commands

```bash
# Frontend
npm run dev          # Start Next.js dev server
npm run build        # Build production bundle
npm start           # Start production server

# Backend
npm run server:dev   # Start Express dev server with nodemon
npm run server:build # Compile TypeScript
npm run server:start # Start compiled server

# Linting
npm run lint        # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication page
│   ├── remittals/         # Remittals page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── auth/             # Authentication components
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ProtectedRoute.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── [Other sections].tsx
├── contexts/
│   └── AuthContext.tsx   # Authentication state management
└── theme/
    └── theme.ts          # Material-UI theme

server/
├── models/
│   └── index.ts          # MongoDB schemas
└── index.ts              # Express server
```

## Key Technologies

- **Frontend**: Next.js 15.5.3, React 19, TypeScript, Material-UI 7.3.2, Framer Motion
- **Backend**: Node.js, Express.js 5.1.0, MongoDB, Mongoose, JWT
- **Styling**: Material-UI components with custom theme
- **Animations**: Framer Motion for scroll animations and interactions
- **Authentication**: JWT-based with secure password hashing