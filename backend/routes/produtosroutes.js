
    const { Router } = require("express");
    const produtosController = require("../controllers/produtosController.js");

    const router = Router();

    router.get("/produtos", produtosController.findAllprodutoss);
    router.get("/produtos/:id", produtosController.findOneprodutos);
    router.put("/produtos/:id", produtosController.updateprodutos);
    router.post("/produtos", produtosController.insertprodutos);

    module.exports = router;
  