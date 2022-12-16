const knex = require("../database/connection");
class Livro {


    async readAll(){

        try{
            let resultQuery =   await knex.select('*').from("livros");
            return {status:true,resultQuery};
            
        }
        catch(err){
            return {status:false,err:err};
        }
        

    }
}

module.exports = new Livro();