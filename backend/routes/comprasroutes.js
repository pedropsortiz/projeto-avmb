
    const { Router } = require("express");
    const comprasController = require("../controllers/comprasController.js");

    const router = Router();

    router.get("/compras", comprasController.findAllcomprass);
    router.get("/compras/:id", comprasController.findOnecompras);
    router.put("/compras/:id", comprasController.updatecompras);
    router.post("/compras", comprasController.insertcompras);

    module.exports = router;
  