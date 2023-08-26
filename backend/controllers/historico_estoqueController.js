
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class historico_estoqueController {
  static async findAllhistorico_estoques(req, res) {
    try {
      const allhistorico_estoques = await models.historico_estoque.findAll();
      return res.status(200).json(allhistorico_estoques);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnehistorico_estoque(req, res) {
      const groupId = req.params.id;
  
      try {
        const historico_estoque = await models.grupos_permissoes.findByPk(groupId);
        if (!historico_estoque) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(historico_estoque);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatehistorico_estoque(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const historico_estoque = await models.grupos_permissoes.findByPk(groupId);
        if (!historico_estoque) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await historico_estoque.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async inserthistorico_estoque(req, res) {
      const newhistorico_estoque = req.body;
  
      try {
        const createdhistorico_estoque = await models.grupos_permissoes.create(newhistorico_estoque);
  
        return res.status(201).json(createdhistorico_estoque);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = historico_estoqueController;
