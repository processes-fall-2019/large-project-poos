const express = require('express')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
// const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

// establish connection with database using Knex ORM
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5437',
    user: 'postgres',
    password: '',
    database: 'large-project-database'
  }
})

// // for production database: establish connection with database using Knex ORM
// var knex = require('knex')({
//   client: 'pg',
//   connection: 'postgres://ethoesmmnzcunu:901dc9decc44710ccf9b2a38b3c8562efb358f46ddb9ada48aa0492da190dc8c@ec2-54-235-180-123.compute-1.amazonaws.com:5432/dde8k4u6i7hq2m',
//   migrations: {
//     tableName: 'knex_migrations'
//   },
//   ssl: true
// })

app.use(morgan('combined'))
app.use(bodyParser.json())

//here we are configuring dist to serve app files
// app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use(serveStatic(path.join(__dirname, '/dist')))

require('./routes')(app, knex)

app.listen(port)

console.log(`app is listening on port: ${port}`)
