const express = require("express");
const routes = require("./routes"); // Aqui

const app = express();
const port = 3000;

routes(app); // Aqui

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
