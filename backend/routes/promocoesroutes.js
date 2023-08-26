
    const { Router } = require("express");
    const promocoesController = require("../controllers/promocoesController.js");

    const router = Router();

    router.get("/promocoes", promocoesController.findAllpromocoess);
    router.get("/promocoes/:id", promocoesController.findOnepromocoes);
    router.put("/promocoes/:id", promocoesController.updatepromocoes);
    router.post("/promocoes", promocoesController.insertpromocoes);

    module.exports = router;
  