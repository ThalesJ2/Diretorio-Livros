const path = require("path");
require("dotenv").config();
console.log(process.env.DB_PASSWORD);
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : '3306',
      user : 'root',
      password:'123456789',
      database : 'diretorio'
    }
  });


knex.raw("select 1").then(()=>{
    console.log("Conectado!");
}).catch((err)=>{
  console.log(err);
})

module.exports = knex;