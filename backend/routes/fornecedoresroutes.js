
    const { Router } = require("express");
    const fornecedoresController = require("../controllers/fornecedoresController.js");

    const router = Router();

    router.get("/fornecedores", fornecedoresController.findAllfornecedoress);
    router.get("/fornecedores/:id", fornecedoresController.findOnefornecedores);
    router.put("/fornecedores/:id", fornecedoresController.updatefornecedores);
    router.post("/fornecedores", fornecedoresController.insertfornecedores);

    module.exports = router;
  