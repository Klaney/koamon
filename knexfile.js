// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.USER,
      password: process.env.PASSWORD || null
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.USER,
      password: process.env.PASSWORD || null
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
    client: 'postgresql',
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
  }

};
