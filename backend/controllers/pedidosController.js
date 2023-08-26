
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class pedidosController {
  static async findAllpedidoss(req, res) {
    try {
      const allpedidoss = await models.pedidos.findAll();
      return res.status(200).json(allpedidoss);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnepedidos(req, res) {
      const groupId = req.params.id;
  
      try {
        const pedidos = await models.grupos_permissoes.findByPk(groupId);
        if (!pedidos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(pedidos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatepedidos(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const pedidos = await models.grupos_permissoes.findByPk(groupId);
        if (!pedidos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await pedidos.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertpedidos(req, res) {
      const newpedidos = req.body;
  
      try {
        const createdpedidos = await models.grupos_permissoes.create(newpedidos);
  
        return res.status(201).json(createdpedidos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = pedidosController;
