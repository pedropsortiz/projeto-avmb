
    const { Router } = require("express");
    const enderecosController = require("../controllers/enderecosController.js");

    const router = Router();

    router.get("/enderecos", enderecosController.findAllenderecoss);
    router.get("/enderecos/:id", enderecosController.findOneenderecos);
    router.put("/enderecos/:id", enderecosController.updateenderecos);
    router.post("/enderecos", enderecosController.insertenderecos);

    module.exports = router;
  