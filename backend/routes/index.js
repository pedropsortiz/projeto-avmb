const bodyParser = require("body-parser");
const produtosRoute = require("./produtosroutes.js");
const usuariosRoute = require("./usuariosroutes.js");
module.exports = (app) => {
  app.use(bodyParser.json());
app.use(produtosRoute);
app.use(usuariosRoute);
};
