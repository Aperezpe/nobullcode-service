import knex from "../db/_connection";

const getAll = async () => {
  return knex('users');
}

export default { getAll }