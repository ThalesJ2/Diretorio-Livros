const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./routes/routes");


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(routes);




app.listen(7070,()=>{
    console.log("App rodando");
});