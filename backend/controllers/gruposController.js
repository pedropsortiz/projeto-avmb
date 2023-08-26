
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class gruposController {
  static async findAllgruposs(req, res) {
    try {
      const allgruposs = await models.grupos.findAll();
      return res.status(200).json(allgruposs);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnegrupos(req, res) {
      const groupId = req.params.id;
  
      try {
        const grupos = await models.grupos_permissoes.findByPk(groupId);
        if (!grupos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(grupos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updategrupos(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const grupos = await models.grupos_permissoes.findByPk(groupId);
        if (!grupos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await grupos.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertgrupos(req, res) {
      const newgrupos = req.body;
  
      try {
        const createdgrupos = await models.grupos_permissoes.create(newgrupos);
  
        return res.status(201).json(createdgrupos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = gruposController;
