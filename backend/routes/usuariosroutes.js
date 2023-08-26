
    const { Router } = require("express");
    const usuariosController = require("../controllers/usuariosController.js");

    const router = Router();

    router.get("/usuarios", usuariosController.findAllusuarioss);
    router.get("/usuarios/:id", usuariosController.findOneusuarios);
    router.put("/usuarios/:id", usuariosController.updateusuarios);
    router.post("/usuarios", usuariosController.insertusuarios);

    module.exports = router;
  