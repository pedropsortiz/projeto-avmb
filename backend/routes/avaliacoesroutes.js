
    const { Router } = require("express");
    const avaliacoesController = require("../controllers/avaliacoesController.js");

    const router = Router();

    router.get("/avaliacoes", avaliacoesController.findAllavaliacoess);
    router.get("/avaliacoes/:id", avaliacoesController.findOneavaliacoes);
    router.put("/avaliacoes/:id", avaliacoesController.updateavaliacoes);
    router.post("/avaliacoes", avaliacoesController.insertavaliacoes);

    module.exports = router;
  