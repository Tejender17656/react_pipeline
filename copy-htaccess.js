const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '.htaccess');
const destinationPath = path.join(__dirname, 'out', '.htaccess');

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Error copying .htaccess:', err);
  } else {
    console.log('.htaccess file copied to the "out" directory successfully.');
  }
});
