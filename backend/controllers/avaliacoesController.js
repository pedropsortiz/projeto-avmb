
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class avaliacoesController {
  static async findAllavaliacoess(req, res) {
    try {
      const allavaliacoess = await models.avaliacoes.findAll();
      return res.status(200).json(allavaliacoess);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneavaliacoes(req, res) {
      const groupId = req.params.id;
  
      try {
        const avaliacoes = await models.grupos_permissoes.findByPk(groupId);
        if (!avaliacoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(avaliacoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateavaliacoes(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const avaliacoes = await models.grupos_permissoes.findByPk(groupId);
        if (!avaliacoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await avaliacoes.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertavaliacoes(req, res) {
      const newavaliacoes = req.body;
  
      try {
        const createdavaliacoes = await models.grupos_permissoes.create(newavaliacoes);
  
        return res.status(201).json(createdavaliacoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = avaliacoesController;
