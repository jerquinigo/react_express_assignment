const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/california_users');



module.exports = { db }
