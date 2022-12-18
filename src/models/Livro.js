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
    async create(nome,autor,genero,image,editora,lancamento){

        try{

            let resultQuery = await knex.insert({nome,autor,genero,image,editora,lancamento}).table('livros');
            return {status:true};

        }catch(err){
            console.log(err);
            return {status:false,err:err};
        }
    }

    async findName(nome){

        try{

            let resultQuery = await knex.select('*').from("livros").where({nome,});
            return {status:true,result:resultQuery};

        }catch(err){

            return {status:false,err:err};
        }
    }

    async findByID(id){

        try{

            let resultQuery = await knex.select('*').from("livros").where({id,});
            return {status:true,result:resultQuery};
        }
        catch(err){
            return {status:false,err:err};
        }
    }

    async delete(id){
        
        try{
            let resultQuery = await  knex("livros").where({id,}).del();
            return {status:true,result:resultQuery}
        }
        catch(err){
            return {status:false,err:err};
        }
    }

    async update(id,nome,autor,genero,image,editora,lancamento){

        let Exists = await this.findByID(id);
    
        if(Exists.status.length != 0){

            try{
                let resultQuery = await knex("livros").update({nome,autor,genero,image,editora,lancamento})
                .where({id,});
                return {status:true,result:resultQuery};
            }
            catch(err){
                console.log(err);
                return {status:false,err:err};
            }
        }
        else    
            return {status:false,err:"id nao encontrado"};
    }

    async filter(nome){

        try{

            let resultQuery = await knex.select("nome").select("autor")
                .select("genero").select("image")
                .select("lancamento").from("livros")
                .whereRaw(`nome LIKE '%${nome}%'`);
            
                return {status:true,result:resultQuery};

        }
        catch(err){
            console.log(err);
            return {status:false,err:err};
        }
    }
}

module.exports = new Livro();