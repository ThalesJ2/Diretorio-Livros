const path = require("path");
require("dotenv").config();
console.log(process.env.DB_NAME);
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    }
  });


knex.raw("select 1").then(()=>{
    console.log("Conected");
}).catch((err)=>{
  console.log(err);
})

module.exports = knex;