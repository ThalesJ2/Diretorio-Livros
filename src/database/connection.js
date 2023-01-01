const path = require("path");
require("dotenv").config();
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      socketPath: '/cloudsql/charbot2-ivjagp:asia-south1:auction-instance',
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    }
  });


knex.raw("select 1").then(()=>{
    console.log("Conectado!");
}).catch((err)=>{
  console.log(err);
})

module.exports = knex;