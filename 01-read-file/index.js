const fs = require('fs') // CommonJS 
const path = require('path') //Path module.

const data = [] // external variable for chunk storring

const filePath = path.resolve(__dirname, 'text.txt')

const readStream = fs.createReadStream(filePath)

// readstream Events
readStream.on('data', (chunk) => {
  data.push(chunk)
})

// event when stream ends
readStream.on('end', () => {
  console.log(data.join(''))
})
