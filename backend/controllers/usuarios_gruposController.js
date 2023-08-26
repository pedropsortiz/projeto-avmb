
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class usuarios_gruposController {
  static async findAllusuarios_gruposs(req, res) {
    try {
      const allusuarios_gruposs = await models.usuarios_grupos.findAll();
      return res.status(200).json(allusuarios_gruposs);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = usuarios_gruposController;
