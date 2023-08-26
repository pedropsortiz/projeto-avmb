
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class grupos_permissoesController {
  static async findAllgrupos_permissoess(req, res) {
    try {
      const allgrupos_permissoess = await models.grupos_permissoes.findAll();
      return res.status(200).json(allgrupos_permissoess);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = grupos_permissoesController;
