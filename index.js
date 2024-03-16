require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>')
})

app.get('/twitter', (req, res) => {
    res.send("<h1>Twitter Page</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
