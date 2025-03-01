const https = require('https');
const fs = require('fs');
const path = require('path');

// Sample video URL - this is a placeholder URL for a royalty-free African-themed venue video
// In a real scenario, you would replace this with an actual video URL
const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-friends-having-fun-at-a-summer-party-5556-large.mp4';
const outputPath = path.join(__dirname, 'public', 'venue-montage.mp4');

console.log('Starting download of venue video montage...');

// Ensure the public directory exists
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
}

// Create a write stream to save the video
const fileStream = fs.createWriteStream(outputPath);

// Download the video
https.get(videoUrl, (response) => {
  // Check if response is successful
  if (response.statusCode !== 200) {
    console.error(`Failed to download video: ${response.statusCode} ${response.statusMessage}`);
    fileStream.close();
    fs.unlinkSync(outputPath); // Remove the file if download failed
    return;
  }

  // Get the total size for progress tracking
  const totalSize = parseInt(response.headers['content-length'], 10);
  let downloadedSize = 0;
  
  // Pipe the response to the file
  response.pipe(fileStream);
  
  // Track download progress
  response.on('data', (chunk) => {
    downloadedSize += chunk.length;
    const progress = Math.round((downloadedSize / totalSize) * 100);
    process.stdout.write(`Downloading: ${progress}% complete\r`);
  });

  // Handle download completion
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('\nVideo montage downloaded successfully!');
    console.log(`Saved to: ${outputPath}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading video: ${err.message}`);
  fileStream.close();
  fs.unlinkSync(outputPath); // Remove the file if download failed
}); 