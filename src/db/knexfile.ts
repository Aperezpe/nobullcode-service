// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import { Knex } from 'knex';
import dontenvConfig from '../dotenv/dotenv_config';


interface KnexConfig {
  [key: string]: Knex.Config;
}

// TODO: Load env file correctly so that I only have to load once
dontenvConfig();

const knexConfig: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.PGNAME,
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT),
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD
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
    searchPath:'nobullcode-blog',
    connection: {
      database: process.env.PGNAME,
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT),
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
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
