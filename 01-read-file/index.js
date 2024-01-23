const fs = require('fs') // CommonJS 
const path = require('path')

const data = []

const filePath = path.resolve(__dirname, 'text.txt')

const readStream = fs.createReadStream(filePath)

readStream.on('data', (chunk) => {
  data.push(chunk)
})

readStream.on('end', () => {
  console.log(data.join(''))
})
