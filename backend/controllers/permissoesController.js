
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class permissoesController {
  static async findAllpermissoess(req, res) {
    try {
      const allpermissoess = await models.permissoes.findAll();
      return res.status(200).json(allpermissoess);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnepermissoes(req, res) {
      const groupId = req.params.id;
  
      try {
        const permissoes = await models.grupos_permissoes.findByPk(groupId);
        if (!permissoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(permissoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatepermissoes(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const permissoes = await models.grupos_permissoes.findByPk(groupId);
        if (!permissoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await permissoes.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertpermissoes(req, res) {
      const newpermissoes = req.body;
  
      try {
        const createdpermissoes = await models.grupos_permissoes.create(newpermissoes);
  
        return res.status(201).json(createdpermissoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = permissoesController;
