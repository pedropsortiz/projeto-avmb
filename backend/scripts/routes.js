
const { Router } = require("express");
const comprasController = require("../controllers/comprasController.js");

const router = Router();

router.get("/pessoas", comprasController.findAllcomprass);

module.exports = router;
