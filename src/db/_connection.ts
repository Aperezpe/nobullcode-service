import knexConfig from "./knexfile";
import Knex from "knex";
import dontenvConfig from "../dotenv/dotenv_config";

// TODO: Load env file correctly so that I only have to load once
dontenvConfig();

export default Knex(knexConfig[process.env.NODE_ENV || 'development']);