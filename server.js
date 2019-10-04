const express = require('express')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
// const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/register', (req, res) => {
  res.send({
    message: 'Hello!'
  })
})

app.listen(port)
console.log(`app is listening on poort: ${port}`)
