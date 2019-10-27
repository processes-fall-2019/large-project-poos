const express = require('express')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

// // establish connection with database using Knex ORM
// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: '5437',
//     user: 'postgres',
//     password: '',
//     database: 'large-project-database'
//   }
// })

// for production database: establish connection with database using Knex ORM
var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://lwwuqfolbrvbch:40f3de750b5e7d629a90fecc514fe2b67c4dc2a4b6f3662cf83232d7773fd81f@ec2-54-83-52-191.compute-1.amazonaws.com:5432/d3i23g57firu3e',
  migrations: {
    tableName: 'knex_migrations'
  },
  ssl: true
})





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




// app.use(function(err, req, res, next) {
//   if (err.code === "LIMIT_FILE_TYPES") {
//     res.status(422).json({ error: "Only images allowed" })
//   }
// })




app.listen(port)

console.log(`app is listening on port: ${port}`)
