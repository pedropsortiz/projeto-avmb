
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class fornecedoresController {
  static async findAllfornecedoress(req, res) {
    try {
      const allfornecedoress = await models.fornecedores.findAll();
      return res.status(200).json(allfornecedoress);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnefornecedores(req, res) {
      const groupId = req.params.id;
  
      try {
        const fornecedores = await models.grupos_permissoes.findByPk(groupId);
        if (!fornecedores) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(fornecedores);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatefornecedores(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const fornecedores = await models.grupos_permissoes.findByPk(groupId);
        if (!fornecedores) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await fornecedores.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertfornecedores(req, res) {
      const newfornecedores = req.body;
  
      try {
        const createdfornecedores = await models.grupos_permissoes.create(newfornecedores);
  
        return res.status(201).json(createdfornecedores);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = fornecedoresController;
