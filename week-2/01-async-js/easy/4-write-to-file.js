const fs = require('fs');

// Data to write to the file
const data = 'This is the content that will be written to the file.';

// File path
const filePath = '/Users/dhruvrawat/Desktop/hell/well.rtf';

// Writing to file asynchronously
fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File contents:', data);
  });
  
  console.log('Data has been written to the file successfully.');
});
