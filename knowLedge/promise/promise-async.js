const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const filePath = path.join(__dirname, '../../package.json')
const readFileAsync = promisify(fs.readFile)
async function readFileFunction (path) {
  try {
    const data = await readFileAsync(path)
    console.log(JSON.parse(data).name)
  } catch (error) {
    console.log(error)
  }
}

readFileFunction(filePath)
