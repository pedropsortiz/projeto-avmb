
const Sequelize = require('sequelize');

// Configurar a conexão com o banco de dados
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});


var initModels = require("../models/init-models.js");

var models = initModels(sequelize)

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
     
      const todasAsPessoas = await models.pedidos.findAll({where: {id_cliente: 2}});
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;