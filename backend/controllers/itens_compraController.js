
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class itens_compraController {
  static async findAllitens_compras(req, res) {
    try {
      const allitens_compras = await models.itens_compra.findAll();
      return res.status(200).json(allitens_compras);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneitens_compra(req, res) {
      const groupId = req.params.id;
  
      try {
        const itens_compra = await models.grupos_permissoes.findByPk(groupId);
        if (!itens_compra) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(itens_compra);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateitens_compra(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const itens_compra = await models.grupos_permissoes.findByPk(groupId);
        if (!itens_compra) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await itens_compra.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertitens_compra(req, res) {
      const newitens_compra = req.body;
  
      try {
        const createditens_compra = await models.grupos_permissoes.create(newitens_compra);
  
        return res.status(201).json(createditens_compra);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = itens_compraController;
