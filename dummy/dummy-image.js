const fs = require('fs');
const path = require('path');

// Path to the directory containing the images
const directoryPath = 'dummy/images/general';

// Function to get a random image file from the directory
function getRandomImage(directoryPath) {
    // Read the contents of the directory
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Filter out only the image files
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif' || ext === '.bmp';
        });

        // Select a random image file
        if (imageFiles.length > 0) {
            const randomIndex = Math.floor(Math.random() * imageFiles.length);
            const randomImage = imageFiles[randomIndex];
            console.log('Random image: ',imageFiles.length , randomImage);
            return randomImage;
        } else {
            console.log('No image files found in the directory.');
        }
    });
}

// Call the function with the directory path
getRandomImage(directoryPath);
