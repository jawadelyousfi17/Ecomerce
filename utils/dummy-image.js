const fs = require('fs');
const path = require('path');

function getRandomImageFromFolder(folderPath, callback) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null,files)
    });
}

// Example usage:
const folderPath = 'dummy/images/profiles';
getRandomImageFromFolder(folderPath, (err, randomImage) => {
    const filePath = 'dummy/data/images-path/profiles.json';
    const data = {
        images : randomImage
    }
    // Write data to file
    fs.writeFile(filePath, JSON.stringify(data), (err) => {

        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Data has been written to', filePath);
    });
});



// File path

