const express = require('express')
const fs = require('fs')
const util = require('util')
const crypto = require('crypto')

// const randomBytesAsync = util.promisify(require('crypto').randomBytes)

const app = express()
const port = 8080

app.get('/async', async (req, res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    res.status(200).json({ status: 'OK' })
  })
})

app.get('/sync', (req, res) => {
  fs.readFileSync('./data.json', { encoding: 'utf-8' })
  res.status(200).json({ status: 'OK' })
})

// app.get('/sync-token', (req, res) => {
//   const buf = crypto.randomBytes(128)
//   res.status(200).json({ status: 'OK' })
// })

// const tokenPromise = () => new Promise((resolve, reject) => {
//   crypto.randomBytes(128, (err, random) => {
//     if (err) {
//       return reject(err);
//     }
//     resolve(random);
//   });
// });

// app.get('/async-token', async (req, res) => {
//   await tokenPromise()
//   res.status(200).json({ status: 'OK' })
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

