
    const { Router } = require("express");
    const logs_acessoController = require("../controllers/logs_acessoController.js");

    const router = Router();

    router.get("/logs_acesso", logs_acessoController.findAlllogs_acessos);
    router.get("/logs_acesso/:id", logs_acessoController.findOnelogs_acesso);
    router.put("/logs_acesso/:id", logs_acessoController.updatelogs_acesso);
    router.post("/logs_acesso", logs_acessoController.insertlogs_acesso);

    module.exports = router;
  