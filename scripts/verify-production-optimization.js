const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Production Optimization...\n');

let issues = [];
let optimizations = [];

// 1. Check favicon files
const faviconFiles = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
  'logo-original.png'
];

const missingFavicons = [];
const faviconDir = path.join(__dirname, '..', 'public');

faviconFiles.forEach(file => {
  const filePath = path.join(faviconDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    optimizations.push(`✅ ${file} (${(stats.size/1024).toFixed(1)}KB)`);
  } else {
    missingFavicons.push(file);
  }
});

if (missingFavicons.length > 0) {
  issues.push(`❌ Missing favicon files: ${missingFavicons.join(', ')}`);
} else {
  optimizations.push('✅ All favicon files present');
}

// 2. Check for unnecessary files
const unnecessaryFiles = [
  'favicon.svg',
  'file.svg',
  'globe.svg',
  'next.svg',
  'vercel.svg',
  'window.svg',
  'logo-temp.png',
  'test-logo.png',
  'tatus --porcelain  findstr PaymentDocumentation',
  'tatus --short'
];

const foundUnnecessary = [];
unnecessaryFiles.forEach(file => {
  const filePath = path.join(faviconDir, file);
  if (fs.existsSync(filePath)) {
    foundUnnecessary.push(file);
  }
});

if (foundUnnecessary.length > 0) {
  issues.push(`❌ Found unnecessary files: ${foundUnnecessary.join(', ')}`);
} else {
  optimizations.push('✅ No unnecessary files in public directory');
}

// 3. Check build directories
const buildDirs = ['.next', 'dist'];
buildDirs.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(dirPath)) {
    optimizations.push(`✅ ${dir} build directory exists`);
  } else {
    issues.push(`❌ ${dir} build directory missing - run build scripts`);
  }
});

// 4. Check configuration files
const configFiles = ['next.config.ts', 'render.yaml'];
configFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    optimizations.push(`✅ ${file} configuration exists`);
  } else {
    issues.push(`❌ ${file} configuration missing`);
  }
});

// 5. Check environment file
const envFile = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envFile)) {
  optimizations.push('✅ Environment configuration exists');
} else {
  optimizations.push('⚠️  Environment configuration (.env.local) not found - create for production');
}

// 6. Check for large files that might slow down the website
const publicFiles = fs.readdirSync(faviconDir);
const largeFiles = [];
publicFiles.forEach(file => {
  const filePath = path.join(faviconDir, file);
  const stats = fs.statSync(filePath);
  if (stats.size > 1000000) { // 1MB
    largeFiles.push(`${file} (${(stats.size/1024/1024).toFixed(1)}MB)`);
  }
});

if (largeFiles.length > 0) {
  issues.push(`❌ Large files that may slow down loading: ${largeFiles.join(', ')}`);
} else {
  optimizations.push('✅ No large files in public directory');
}

// Display results
if (issues.length > 0) {
  console.log('❌ ISSUES FOUND:');
  issues.forEach(issue => console.log(`  ${issue}`));
  console.log();
}

console.log('✅ OPTIMIZATIONS VERIFIED:');
optimizations.forEach(opt => console.log(`  ${opt}`));

console.log('\n📊 SUMMARY:');
console.log(`  Issues: ${issues.length}`);
console.log(`  Optimizations: ${optimizations.length}`);

if (issues.length === 0) {
  console.log('\n🎉 ALL OPTIMIZATIONS SUCCESSFUL!');
  console.log('Your website is ready for production deployment.');
} else {
  console.log('\n⚠️  Please address the issues above before production deployment.');
}

console.log('\n💡 TIPS FOR PRODUCTION:');
console.log('  1. Run "npm run build" before each deployment');
console.log('  2. Set NODE_ENV=production in your environment');
console.log('  3. Use a CDN for static assets when possible');
console.log('  4. Monitor performance with tools like Lighthouse');