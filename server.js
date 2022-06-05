// 1- Require Express
const express = require("express")
const fs = require('fs')
const verification = require('./verification')

// 2- Creation instance of Express
const app = express()
// Middleware body-parser
app.use(express.json())

// 4- Get pages with Verification
// Home page
app.get('/', verification, (req, res) => {
    fs.readFile('./HomePage.html', 'utf8', (err, data) => {
        err ? res.end('HomePage FILE NOT FOUND') && console.error(err) : res.end(data);
    })
})
app.get('/HomePage.html', verification, (req, res) => {
    fs.readFile('./HomePage.html', 'utf8', (err, data) => {
        err ? res.end('HomePage FILE NOT FOUND') && console.error(err) : res.end(data);
    })
})
// Our services page
app.get('/OurServices.html', verification, (req, res) => {
    fs.readFile('./OurServices.html', 'utf8', (err, data) => {
        err ? res.end('OurServices FILE NOT FOUND') && console.error(err) : res.end(data);
    })
})
// Contact us page
app.get('/ContactUs.html', verification, (req, res) => {
    fs.readFile('./ContactUs.html', 'utf8', (err, data) => {
        err ? res.end('ContactUs FILE NOT FOUND') && console.error(err) : res.end(data);
    })
})

// 3- Create server
const PORT = 2728
app.listen(PORT, (error) => {
    error ? console.log(error)
    :
    console.log(`Server is runnig on port ${PORT} ...`)
})