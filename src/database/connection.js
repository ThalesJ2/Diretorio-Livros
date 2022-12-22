const path = require("path");
require("dotenv").config();
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : "localhost",
      port : 3306,
      user : "root",
      password:"993366pe",
      database :"diretorio"
    }
  });

module.exports = knex;