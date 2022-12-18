const {Router} = require("express");
const router = Router();
const LivroController = require("../controllers/LivroController");


router.get("/livro",LivroController.findAll);
router.get("/livro/:nome",LivroController.findBook);
router.post("/livro",LivroController.create);
router.put("/livro",LivroController.update);
router.delete("/livro",LivroController.delete);




module.exports = router;