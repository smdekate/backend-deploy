require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/login', (req, res) => {
    res.send("Login Page")
})

app.get('/twitter', (req, res) => {
    res.send("Twitter Page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})