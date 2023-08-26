
    const { Router } = require("express");
    const usuarios_gruposController = require("../controllers/usuarios_gruposController.js");

    const router = Router();

    router.get("/usuarios_grupos", usuarios_gruposController.findAllusuarios_gruposs);
    router.get("/usuarios_grupos/:id", usuarios_gruposController.findOneusuarios_grupos);
    router.put("/usuarios_grupos/:id", usuarios_gruposController.updateusuarios_grupos);
    router.post("/usuarios_grupos", usuarios_gruposController.insertusuarios_grupos);

    module.exports = router;
  