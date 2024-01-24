const fs = require('fs');
const readline = require('readline');

// Create a writable stream to a text file
const fileStream = fs.createWriteStream('./02-write-file/output.txt', { flags: 'a' });

// Display a welcome message in the console
console.log('Welcome! Enter text (type "ctrl + c" to terminate):');

// Create readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to handle user input
const handleInput = (input) => {
  // Check for exit keyword
  if (input.toLowerCase() === 'exit') {
    // Display farewell message
    console.log('Goodbye! Process terminated.');
    // Close the stream and readline interface
    fileStream.end();
    rl.close();
  } else {
    // Write the entered text to the file
    fileStream.write(`${input}\n`);
    // Continue waiting for further input
    rl.question('', handleInput);
  }
};

// Wait for user input, with subsequent checking for the presence of the keyword exit
rl.question('', handleInput);

// Implement a farewell message when the process is stopped
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT (Ctrl+C). Goodbye! Process terminated.');
  // Close the stream and readline interface
  fileStream.end();
  rl.close();
});