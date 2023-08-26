
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class historico_precosController {
  static async findAllhistorico_precoss(req, res) {
    try {
      const allhistorico_precoss = await models.historico_precos.findAll();
      return res.status(200).json(allhistorico_precoss);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnehistorico_precos(req, res) {
      const groupId = req.params.id;
  
      try {
        const historico_precos = await models.grupos_permissoes.findByPk(groupId);
        if (!historico_precos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(historico_precos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatehistorico_precos(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const historico_precos = await models.grupos_permissoes.findByPk(groupId);
        if (!historico_precos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await historico_precos.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async inserthistorico_precos(req, res) {
      const newhistorico_precos = req.body;
  
      try {
        const createdhistorico_precos = await models.grupos_permissoes.create(newhistorico_precos);
  
        return res.status(201).json(createdhistorico_precos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = historico_precosController;
