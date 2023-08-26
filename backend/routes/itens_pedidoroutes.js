
    const { Router } = require("express");
    const itens_pedidoController = require("../controllers/itens_pedidoController.js");

    const router = Router();

    router.get("/itens_pedido", itens_pedidoController.findAllitens_pedidos);
    router.get("/itens_pedido/:id", itens_pedidoController.findOneitens_pedido);
    router.put("/itens_pedido/:id", itens_pedidoController.updateitens_pedido);
    router.post("/itens_pedido", itens_pedidoController.insertitens_pedido);

    module.exports = router;
  