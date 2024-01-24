const fs = require('fs');
const readline = require('readline');
const path = require('path');

const fileStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), { flags: 'a' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome! Enter some text. Type "exit" to quit.');

const handleInput = (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    closeApplication();
  } else {
    fileStream.write(input + '\n', 'utf8');
  }
};

const closeApplication = () => {
  console.log('Goodbye!');
  fileStream.close();
  rl.close();
  process.exit();
};

rl.on('line', handleInput);

rl.on('SIGINT', () => {
  closeApplication();
});
