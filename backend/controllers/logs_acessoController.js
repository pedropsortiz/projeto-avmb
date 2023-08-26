
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class logs_acessoController {
  static async findAlllogs_acessos(req, res) {
    try {
      const alllogs_acessos = await models.logs_acesso.findAll();
      return res.status(200).json(alllogs_acessos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnelogs_acesso(req, res) {
      const groupId = req.params.id;
  
      try {
        const logs_acesso = await models.grupos_permissoes.findByPk(groupId);
        if (!logs_acesso) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(logs_acesso);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatelogs_acesso(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const logs_acesso = await models.grupos_permissoes.findByPk(groupId);
        if (!logs_acesso) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await logs_acesso.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertlogs_acesso(req, res) {
      const newlogs_acesso = req.body;
  
      try {
        const createdlogs_acesso = await models.grupos_permissoes.create(newlogs_acesso);
  
        return res.status(201).json(createdlogs_acesso);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = logs_acessoController;
