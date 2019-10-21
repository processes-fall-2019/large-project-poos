// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5437',
      user: 'postgres',
      password: '',
      database: 'large-project-database'
    },
   //  migrations: {
   //   directory: './db/migrations',
   // },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://lwwuqfolbrvbch:40f3de750b5e7d629a90fecc514fe2b67c4dc2a4b6f3662cf83232d7773fd81f@ec2-54-83-52-191.compute-1.amazonaws.com:5432/d3i23g57firu3e',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
