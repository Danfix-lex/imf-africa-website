const fs = require('fs');
const path = require('path');

// Function to delete a file or directory
function deletePath(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        fs.rmSync(filePath, { recursive: true, force: true });
        console.log(`Removed directory: ${filePath}`);
      } else {
        fs.unlinkSync(filePath);
        console.log(`Removed file: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error removing ${filePath}:`, error.message);
  }
}

// Function to clean up development files not needed in production
function cleanupForProduction() {
  console.log('Starting production cleanup...');
  
  // Remove development-specific files and directories
  const pathsToRemove = [
    // Development documentation
    'DEVELOPMENT.md',
    
    // Development configuration files
    'nodemon.json',
    
    // TypeScript build info (not needed in production)
    '.tsbuildinfo',
    
    // Log files (if any)
    '*.log',
    
    // Temporary files
    '*.tmp',
    
    // Editor files
    '.vscode',
    '.idea',
    
    // Test directories
    '__tests__',
    '__mocks__',
    'test',
    'tests',
    
    // Example files
    '.env.example',
    
    // Build artifacts that might be in the wrong place
    'dist', // Should be in server/dist
    
    // Next.js development files
    '.next/cache',
  ];
  
  // Remove unnecessary dependencies from package.json
  try {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Remove devDependencies from dependencies (if any were accidentally added)
    // Note: We don't actually remove devDependencies as they're needed for building
    
    // Write back the package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Verified package.json structure');
  } catch (error) {
    console.error('Error processing package.json:', error.message);
  }
  
  // Remove unnecessary files in public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (fs.existsSync(publicDir)) {
    const publicFiles = fs.readdirSync(publicDir);
    const unnecessaryPublicFiles = [
      // These were already cleaned up by the favicon script, but just in case:
      'favicon.svg',
      'file.svg',
      'globe.svg',
      'next.svg',
      'vercel.svg',
      'window.svg',
      'logo-temp.png',
      'test-logo.png'
    ];
    
    unnecessaryPublicFiles.forEach(file => {
      const filePath = path.join(publicDir, file);
      deletePath(filePath);
    });
  }
  
  console.log('Production cleanup completed!');
  console.log('\nFor optimal production deployment, also ensure:');
  console.log('1. You run "npm run build" to create optimized production builds');
  console.log('2. You set NODE_ENV=production in your production environment');
  console.log('3. You have proper environment variables configured');
  console.log('4. You remove any unused dependencies from package.json');
}

cleanupForProduction();