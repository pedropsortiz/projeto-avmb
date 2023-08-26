
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class itens_pedidoController {
  static async findAllitens_pedidos(req, res) {
    try {
      const allitens_pedidos = await models.itens_pedido.findAll();
      return res.status(200).json(allitens_pedidos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneitens_pedido(req, res) {
      const groupId = req.params.id;
  
      try {
        const itens_pedido = await models.grupos_permissoes.findByPk(groupId);
        if (!itens_pedido) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(itens_pedido);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateitens_pedido(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const itens_pedido = await models.grupos_permissoes.findByPk(groupId);
        if (!itens_pedido) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await itens_pedido.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertitens_pedido(req, res) {
      const newitens_pedido = req.body;
  
      try {
        const createditens_pedido = await models.grupos_permissoes.create(newitens_pedido);
  
        return res.status(201).json(createditens_pedido);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = itens_pedidoController;
