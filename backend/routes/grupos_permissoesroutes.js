
    const { Router } = require("express");
    const grupos_permissoesController = require("../controllers/grupos_permissoesController.js");

    const router = Router();

    router.get("/grupos_permissoes", grupos_permissoesController.findAllgrupos_permissoess);
    router.get("/grupos_permissoes/:id", grupos_permissoesController.findOnegrupos_permissoes);
    router.put("/grupos_permissoes/:id", grupos_permissoesController.updategrupos_permissoes);
    router.post("/grupos_permissoes", grupos_permissoesController.insertgrupos_permissoes);

    module.exports = router;
  