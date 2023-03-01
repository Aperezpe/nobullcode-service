var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
// export default {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   },
// };
module.exports = pool;