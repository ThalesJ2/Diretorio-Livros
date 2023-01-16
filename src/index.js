const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./routes/routes");
const log = require("./Logs/log");
const PORT  =  process.env.DB_port || 4545;
app.use(log);

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(routes);


app.listen(PORT,()=>{
    console.log("app rodandos!");
});