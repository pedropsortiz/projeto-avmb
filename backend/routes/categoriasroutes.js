
    const { Router } = require("express");
    const categoriasController = require("../controllers/categoriasController.js");

    const router = Router();

    router.get("/categorias", categoriasController.findAllcategoriass);
    router.get("/categorias/:id", categoriasController.findOnecategorias);
    router.put("/categorias/:id", categoriasController.updatecategorias);
    router.post("/categorias", categoriasController.insertcategorias);

    module.exports = router;
  