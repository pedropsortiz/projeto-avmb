
    const { Router } = require("express");
    const clientesController = require("../controllers/clientesController.js");

    const router = Router();

    router.get("/clientes", clientesController.findAllclientess);
    router.get("/clientes/:id", clientesController.findOneclientes);
    router.put("/clientes/:id", clientesController.updateclientes);
    router.post("/clientes", clientesController.insertclientes);

    module.exports = router;
  