
    const { Router } = require("express");
    const pedidosController = require("../controllers/pedidosController.js");

    const router = Router();

    router.get("/pedidos", pedidosController.findAllpedidoss);
    router.get("/pedidos/:id", pedidosController.findOnepedidos);
    router.put("/pedidos/:id", pedidosController.updatepedidos);
    router.post("/pedidos", pedidosController.insertpedidos);

    module.exports = router;
  