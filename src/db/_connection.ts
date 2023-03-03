import knexConfig from "./knexfile";
import Knex from "knex";

export default Knex(knexConfig[process.env.NODE_ENV || 'development']);