const { Router } = require("express");
const PessoaController = require("../controllers/ClientesController.js");

const router = Router();

router.get("/pessoas", PessoaController.pegaTodasAsPessoas);

module.exports = router;
