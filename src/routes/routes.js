const {Router} = require("express");
const router = Router();
const LivroController = require("../controllers/LivroController");


router.get("/livro",LivroController.findAll);
router.post("/livro",LivroController.create);
router.delete("/livro",LivroController.delete);




module.exports = router;