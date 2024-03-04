//1


const fs = require('fs');

// File path
const filePath = 'input.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Modify the content
    const modifiedContent = data.replace('old text', 'new text');

    // Write the modified content back to the file
    fs.writeFile(filePath, modifiedContent, 'utf8', err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File has been modified and saved successfully.');
    });
});



// 2 

var fs = require('fs');

// Read binary data from a file
fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Read binary data:', data);
});


var binaryData = Buffer.from('Namste Duniya!!', 'utf8'); // Convert string to binary data
fs.writeFile('output.bin', binaryData, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Binary data written to output.bin');
});