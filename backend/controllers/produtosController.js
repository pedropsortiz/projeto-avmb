
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class produtosController {
  static async findAllprodutoss(req, res) {
    try {
      const allprodutoss = await models.produtos.findAll();
      return res.status(200).json(allprodutoss);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneprodutos(req, res) {
      const groupId = req.params.id;
  
      try {
        const produtos = await models.produtos.findByPk(groupId);
        if (!produtos) {
          return res.status(404).json({ message: "Erro 404. Requisição não encontrada" });
        }
        return res.status(200).json(produtos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateprodutos(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const produtos = await models.produtos.findByPk(groupId);
        if (!produtos) {
          return res.status(404).json({ message: "Erro 404. Requisição não encontrada" });
        }
        
        await produtos.update(updatedData);
  
        return res.status(200).json({ message: "Requisição atualizada com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertprodutos(req, res) {
      const newprodutos = req.body;
  
      try {
        const createdprodutos = await models.produtos.create(newprodutos);
  
        return res.status(201).json(createdprodutos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = produtosController;
