// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import { Knex } from 'knex';

interface KnexConfig {
  [key: string]: Knex.Config;
}

const knexConfig: KnexConfig = {
  development: {
    client: 'postgresql',
    searchPath:'nobullcode-blog',
    connection: {
      database: 'postgres',
      host: 'nobullcode-test-db.ceaempwduvx9.us-east-2.rds.amazonaws.com',
      port: 5432,
      user: 'aperezpe',
      password: 'Sandia#15'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

export default knexConfig;

// module.exports = {


  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

// };
