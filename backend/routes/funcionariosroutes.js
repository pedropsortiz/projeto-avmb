
    const { Router } = require("express");
    const funcionariosController = require("../controllers/funcionariosController.js");

    const router = Router();

    router.get("/funcionarios", funcionariosController.findAllfuncionarioss);
    router.get("/funcionarios/:id", funcionariosController.findOnefuncionarios);
    router.put("/funcionarios/:id", funcionariosController.updatefuncionarios);
    router.post("/funcionarios", funcionariosController.insertfuncionarios);

    module.exports = router;
  