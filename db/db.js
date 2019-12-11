// establish connection with database using Knex ORM
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'Postyboi21!@',
    database: 'large-project-database'
  }
})

// // for production database: establish connection with database using Knex ORM
// var knex = require('knex')({
//   client: 'pg',
//   connection: 'postgres://lwwuqfolbrvbch:40f3de750b5e7d629a90fecc514fe2b67c4dc2a4b6f3662cf83232d7773fd81f@ec2-54-83-52-191.compute-1.amazonaws.com:5432/d3i23g57firu3e',
//   migrations: {
//     tableName: 'knex_migrations'
//   },
//   ssl: true
// })


module.exports = knex
