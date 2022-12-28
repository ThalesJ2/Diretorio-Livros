const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./routes/routes");
const log = require("./Logs/log");
app.use(log);

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(routes);


app.listen(7070,()=>{
    console.log("rodando api!");
});