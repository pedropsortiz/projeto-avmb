
const teste = require('../models/teste.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");

var models = initModels(sequelize)

class testeController {
  static async pegaTodasAsPteste(req, res) {
    try {
     
      const todasAsteste = await models.pedidos.findAll({where: {id_cliente: 2}});
      return res.status(200).json(todasAsteste);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = testeaController;
