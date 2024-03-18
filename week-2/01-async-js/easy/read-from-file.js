
const fs = require('fs');

const filePath = '/Users/dhruvrawat/Desktop/hell/well.rtf';

// Read contents of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    // Print file contents to the console
    console.log('File Contents:', data);
    // Perform an expensive operation (you can replace this with your own operation)
    expensiveOperation(() => {
        console.log('Expensive operation completed.');
    });
});


function expensiveOperation(callback) {
    // Simulating an expensive operation with setTimeout
    setTimeout(callback, 1000); // You can increase the timeout for a more expensive operation
}
