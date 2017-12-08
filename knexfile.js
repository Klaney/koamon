// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://keatonus@localhost/keaton-laney'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'keaton-laney',
      user:     process.env.USER,
      password: null
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
