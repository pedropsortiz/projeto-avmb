const express = require("express");
const rateLimit = require("express-rate-limit");
const routes = require("./routes");

const app = express();
const port = 8080;

// Configuração do rate limiting: 2 requisições por minuto
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 2, // 2 requisições por minuto
  message: "Limite de requisições excedido. Por favor, tente novamente mais tarde."
});

// Aplicando o rate limiting a todas as rotas
app.use(limiter);

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
