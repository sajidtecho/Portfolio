const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourceDir = path.join(__dirname, 'Resume');
const publicDir = path.join(__dirname, 'public');
const sourceFile = path.join(sourceDir, 'Sajid_Ahmad.pdf');
const destFile = path.join(publicDir, 'Sajid_Ahmad.pdf');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created public directory');
}

// Copy the resume file
if (fs.existsSync(sourceFile)) {
  try {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✅ Resume PDF copied to public folder successfully!');
    console.log(`   From: ${sourceFile}`);
    console.log(`   To:   ${destFile}`);
  } catch (error) {
    console.error('❌ Error copying resume file:', error.message);
    process.exit(1);
  }
} else {
  console.warn('⚠️  Warning: Resume file not found at:', sourceFile);
  console.log('   The resume download button will still work after you add the PDF');
}
