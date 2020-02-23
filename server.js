const express = require('express')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
const knex = require('./db/db')
require('dotenv').config()


// const fileFilter = function(req, file, cb) {
//   const allowedTypes = ["image.jpeg", "image.png", "image.pdf", "image/gif"]
//
//   if (!allowedTypes.includes(file.mimetype)) {
//     const error = new Error("Wrong file type")
//     error.code = "LIMIT_FILE_TYPES"
//     return cb(error, false)
//   }
//
//   cb(null, true)
// }

const upload = multer({
  dest: './uploads/',
  // fileFilter
})


app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

//here we are configuring dist to serve app files
// app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use(serveStatic(path.join(__dirname, '/dist')))

require('./routes')(app, knex, upload)     // TODO: this should go in ../api/routes

app.listen(port)

console.log(`app is listening on port: ${port}`)
