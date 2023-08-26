
const Clientes = require('../models/Clientes.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");

var models = initModels(sequelize)

class ClientesController {
  static async pegaTodasAsPClientes(req, res) {
    try {
     
      const todasAsClientes = await models.pedidos.findAll({where: {id_cliente: 2}});
      return res.status(200).json(todasAsClientes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClientesaController;
