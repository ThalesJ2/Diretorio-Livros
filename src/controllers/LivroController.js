const Livro = require("../models/Livro");
class LivroController {


    async create(req,res){
        let {nome,autor,genero,image,editora,lancamento} = req.body;
        let ano = new Date().getFullYear();
        

        if(nome == undefined || nome == '')
            return res.sendStatus(400);
        else
        if(autor == undefined || autor == '')
            return res.sendStatus(400);
        else
        if(genero == undefined || genero == '')
            return res.sendStatus(400);
        else
        if(image == undefined || image == '')
            return res.sendStatus(400);
        else
        if(editora == undefined || editora == '')
            return res.sendStatus(400);
        else
        if(lancamento <= 1800 || lancamento > ano || lancamento == undefined)
            return res.sendStatus(400);


        
        let ExistsName = await Livro.findName(nome);


            if(ExistsName.result.length == 0)
            {
                let result =  await Livro.create(nome,autor,genero,image,editora,lancamento);
                if(result.status)
                    return res.json({nome,autor,genero,image,editora});
                else
                    return res.sendStatus(400);
            }
            else
                return res.sendStatus(400);
                


    }

    async findAll(req,res){

        let result =  await Livro.readAll();
        let {id} = req.query;

        if(id == undefined){

            if(result.status){
              return res.json(result.resultQuery);
            }
            else
                return res.json({message:"O banco de dados esta vazio"});
        }
        else{
            
            let resultBook = await Livro.findByID(id);
            if(resultBook.status)
                return res.json(resultBook.result);
            else
                return res.json(resultBook.err);
        }

    }

    async delete(req,res){

        let {id} = req.body;


        if(id!=undefined){

            let result = await Livro.delete(id);
            console.log(result);

            if(result.result > 0)
                return res.sendStatus(200);
            else
                return res.sendStatus(400);
        }
        else
          return res.sendStatus(400);

    }

  
}

module.exports = new LivroController();