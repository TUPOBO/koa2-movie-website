const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const filePath = path.join(__dirname, '../../package.json')

// 回调地狱
// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     data = JSON.parse(data)
//     console.log(data.name)
//   }
// })

// Promise
// const readFileFunction = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// readFileFunction(filePath)
//   .then(data => {
//     // data = JSON.parse(data)
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })

//  封装好的promise - util.promisify
promisify(fs.readFile)(filePath)
  .then(data => {
    data = JSON.parse(data)
    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  })
