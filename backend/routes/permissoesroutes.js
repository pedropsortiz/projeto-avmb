
    const { Router } = require("express");
    const permissoesController = require("../controllers/permissoesController.js");

    const router = Router();

    router.get("/permissoes", permissoesController.findAllpermissoess);
    router.get("/permissoes/:id", permissoesController.findOnepermissoes);
    router.put("/permissoes/:id", permissoesController.updatepermissoes);
    router.post("/permissoes", permissoesController.insertpermissoes);

    module.exports = router;
  