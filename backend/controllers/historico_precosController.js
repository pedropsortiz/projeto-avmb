
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class historico_precosController {
  static async findAllhistorico_precoss(req, res) {
    try {
      const allhistorico_precoss = await models.historico_precos.findAll();
      return res.status(200).json(allhistorico_precoss);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = historico_precosController;
