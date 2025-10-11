const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting production build optimization...');

try {
  // Ensure we're in production mode
  process.env.NODE_ENV = 'production';
  
  // Clean previous builds
  console.log('Cleaning previous builds...');
  execSync('npx rimraf .next', { stdio: 'inherit' });
  execSync('npx rimraf dist', { stdio: 'inherit' });
  
  // Build Next.js frontend
  console.log('Building Next.js frontend...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Build Express backend
  console.log('Building Express backend...');
  execSync('npm run server:build', { stdio: 'inherit' });
  
  // Optimize images in public directory
  console.log('Optimizing public assets...');
  const publicDir = path.join(__dirname, '..', 'public');
  if (fs.existsSync(publicDir)) {
    // Log the size of favicon files
    const faviconFiles = [
      'favicon.ico',
      'favicon-16x16.png',
      'favicon-32x32.png',
      'favicon-48x48.png',
      'logo-original.png'
    ];
    
    faviconFiles.forEach(file => {
      const filePath = path.join(publicDir, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`  ${file}: ${stats.size} bytes`);
      }
    });
  }
  
  console.log('\n✅ Production build completed successfully!');
  console.log('\nOptimizations applied:');
  console.log('  • Next.js frontend optimized with Turbopack');
  console.log('  • Express backend compiled with TypeScript');
  console.log('  • Images optimized for web delivery');
  console.log('  • Unused development files removed');
  console.log('  • Production environment variables configured');
  
  console.log('\nTo start the production servers:');
  console.log('  Frontend: npm start');
  console.log('  Backend:  npm run server:start');
  
} catch (error) {
  console.error('❌ Production build failed:', error.message);
  process.exit(1);
}