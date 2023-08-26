
    const { Router } = require("express");
    const gruposController = require("../controllers/gruposController.js");

    const router = Router();

    router.get("/grupos", gruposController.findAllgruposs);
    router.get("/grupos/:id", gruposController.findOnegrupos);
    router.put("/grupos/:id", gruposController.updategrupos);
    router.post("/grupos", gruposController.insertgrupos);

    module.exports = router;
  