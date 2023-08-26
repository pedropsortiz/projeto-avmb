const express = require("express");
const rateLimit = require("express-rate-limit");
const fs = require("fs");
const path = require("path");
const routes = require("./routes");

const app = express();
const port = 8080;

// Configuração do rate limiting: 2 requisições por minuto
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 50,
  message: "Limite de requisições excedido. Por favor, tente novamente mais tarde."
});

// Aplicando o rate limiting a todas as rotas
app.use(limiter);

// Middleware para registrar requisições em um arquivo de log
app.use((req, res, next) => {
  const logFilePath = path.join(__dirname, "request_log.txt");
  const logData = `${new Date().toISOString()} - IP: ${req.ip} - Method: ${req.method} - URL: ${req.originalUrl}\n`;

  fs.appendFile(logFilePath, logData, (err) => {
    if (err) {
      console.error("Erro ao registrar requisição:", err);
    }
  });

  next();
});

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
