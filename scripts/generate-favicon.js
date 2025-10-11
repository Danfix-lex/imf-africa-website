const fs = require('fs');
const path = require('path');
const https = require('https');
const { createCanvas, loadImage } = require('canvas');

// Create favicon directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Function to download image from URL
function downloadImage(url, destination) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {}); // Ignore errors during unlink
      reject(err);
    });
  });
}

// Function to create favicon from image
async function createFavicon() {
  try {
    // Use your actual Cloudinary logo URL
    // Format: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/logo/logo.png
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dprrsr08j';
    const logoUrl = `https://res.cloudinary.com/${cloudName}/image/upload/logo/logo.png`;
    
    console.log(`Downloading logo from: ${logoUrl}`);
    
    // Download the actual logo from Cloudinary
    await downloadImage(logoUrl, path.join(publicDir, 'logo-original.png'));
    console.log('Logo downloaded successfully!');
    
    // Try to load and process the image
    try {
      const image = await loadImage(path.join(publicDir, 'logo-original.png'));
      
      // Create different sizes for favicon
      const sizes = [16, 32, 48];
      
      for (const size of sizes) {
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        
        // Draw the logo, scaled to fit the favicon size
        // Maintain aspect ratio and center the image
        const ratio = Math.min(size / image.width, size / image.height);
        const width = image.width * ratio;
        const height = image.height * ratio;
        const x = (size - width) / 2;
        const y = (size - height) / 2;
        
        ctx.drawImage(image, x, y, width, height);
        
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(path.join(publicDir, `favicon-${size}x${size}.png`), buffer);
      }
      
      // For the ICO file, we'll use the 32x32 version
      const sourceBuffer = fs.readFileSync(path.join(publicDir, 'favicon-32x32.png'));
      fs.writeFileSync(path.join(publicDir, 'favicon.ico'), sourceBuffer);
      
      console.log('Favicon files created successfully from your Cloudinary logo!');
      console.log('Created files:');
      console.log('- favicon.ico');
      console.log('- favicon-16x16.png');
      console.log('- favicon-32x32.png');
      console.log('- favicon-48x48.png');
      console.log('- logo-original.png');
    } catch (imageError) {
      console.log('Could not process the downloaded image, creating a simple version...');
      createSimpleFavicon();
    }
  } catch (error) {
    console.error('Error downloading logo from Cloudinary:', error.message);
    
    // Fallback to the simple logo if Cloudinary download fails
    console.log('Creating simple favicon...');
    createSimpleFavicon();
  }
}

// Function to create a simple favicon with IMF branding
function createSimpleFavicon() {
  try {
    // Create different sizes for favicon
    const sizes = [16, 32, 48];
    
    for (const size of sizes) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      
      // Blue background
      ctx.fillStyle = '#1976d2'; // IMF blue color
      ctx.fillRect(0, 0, size, size);
      
      // White "IMF" text for larger sizes, just "I" for smaller
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      if (size === 16) {
        ctx.font = 'bold 10px Arial';
        ctx.fillText('I', size/2, size/2);
      } else if (size === 32) {
        ctx.font = 'bold 12px Arial';
        ctx.fillText('IMF', size/2, size/2 - 3);
        ctx.font = 'bold 10px Arial';
        ctx.fillText('A', size/2, size/2 + 8);
      } else {
        ctx.font = 'bold 16px Arial';
        ctx.fillText('IMF', size/2, size/2 - 4);
        ctx.font = 'bold 14px Arial';
        ctx.fillText('A', size/2, size/2 + 10);
      }
      
      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync(path.join(publicDir, `favicon-${size}x${size}.png`), buffer);
    }
    
    // Create ICO file from the 32x32 version
    const sourceBuffer = fs.readFileSync(path.join(publicDir, 'favicon-32x32.png'));
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), sourceBuffer);
    
    console.log('Simple favicon files created successfully!');
    console.log('Created files:');
    console.log('- favicon.ico');
    console.log('- favicon-16x16.png');
    console.log('- favicon-32x32.png');
    console.log('- favicon-48x48.png');
  } catch (error) {
    console.error('Error creating simple favicon:', error);
  }
}

createFavicon();