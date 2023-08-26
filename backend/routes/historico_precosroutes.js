
    const { Router } = require("express");
    const historico_precosController = require("../controllers/historico_precosController.js");

    const router = Router();

    router.get("/historico_precos", historico_precosController.findAllhistorico_precoss);
    router.get("/historico_precos/:id", historico_precosController.findOnehistorico_precos);
    router.put("/historico_precos/:id", historico_precosController.updatehistorico_precos);
    router.post("/historico_precos", historico_precosController.inserthistorico_precos);

    module.exports = router;
  