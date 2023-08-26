
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class grupos_permissoesController {
  static async findAllgrupos_permissoess(req, res) {
    try {
      const allgrupos_permissoess = await models.grupos_permissoes.findAll();
      return res.status(200).json(allgrupos_permissoess);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnegrupos_permissoes(req, res) {
      const groupId = req.params.id;
  
      try {
        const grupos_permissoes = await models.grupos_permissoes.findByPk(groupId);
        if (!grupos_permissoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(grupos_permissoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updategrupos_permissoes(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const grupos_permissoes = await models.grupos_permissoes.findByPk(groupId);
        if (!grupos_permissoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await grupos_permissoes.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertgrupos_permissoes(req, res) {
      const newgrupos_permissoes = req.body;
  
      try {
        const createdgrupos_permissoes = await models.grupos_permissoes.create(newgrupos_permissoes);
  
        return res.status(201).json(createdgrupos_permissoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = grupos_permissoesController;
