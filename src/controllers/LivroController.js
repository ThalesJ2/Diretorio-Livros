const Livro = require("../models/Livro");
class LivroController {


    async index(req,res){

        return res.json({message:"funcionando"});
    }

    async create(req,res){
        let {nome,autor,genero,image,publicadora} = req.body;

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
        if(publicadora == undefined || publicadora == '')
            return res.sendStatus(400);

    
            return res.json({nome,autor,genero,image,publicadora});

    }

    async findAll(req,res){

        let result =  await Livro.readAll();

        if(result.status){
            return res.json(result.resultQuery);
        }
    }
}

module.exports = new LivroController();