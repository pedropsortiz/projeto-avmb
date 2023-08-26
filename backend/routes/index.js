const bodyPaser = require("body-parser");
const pessoas = require("./pessoaRoute.js");
module.exports = (app) => {
  app.use(bodyPaser.json());
  app.use(pessoas);
};
