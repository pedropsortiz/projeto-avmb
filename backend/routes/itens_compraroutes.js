
    const { Router } = require("express");
    const itens_compraController = require("../controllers/itens_compraController.js");

    const router = Router();

    router.get("/itens_compra", itens_compraController.findAllitens_compras);
    router.get("/itens_compra/:id", itens_compraController.findOneitens_compra);
    router.put("/itens_compra/:id", itens_compraController.updateitens_compra);
    router.post("/itens_compra", itens_compraController.insertitens_compra);

    module.exports = router;
  