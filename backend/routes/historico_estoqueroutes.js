
    const { Router } = require("express");
    const historico_estoqueController = require("../controllers/historico_estoqueController.js");

    const router = Router();

    router.get("/historico_estoque", historico_estoqueController.findAllhistorico_estoques);
    router.get("/historico_estoque/:id", historico_estoqueController.findOnehistorico_estoque);
    router.put("/historico_estoque/:id", historico_estoqueController.updatehistorico_estoque);
    router.post("/historico_estoque", historico_estoqueController.inserthistorico_estoque);

    module.exports = router;
  