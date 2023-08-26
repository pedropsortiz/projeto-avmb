
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class promocoesController {
  static async findAllpromocoess(req, res) {
    try {
      const allpromocoess = await models.promocoes.findAll();
      return res.status(200).json(allpromocoess);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnepromocoes(req, res) {
      const groupId = req.params.id;
  
      try {
        const promocoes = await models.grupos_permissoes.findByPk(groupId);
        if (!promocoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(promocoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatepromocoes(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const promocoes = await models.grupos_permissoes.findByPk(groupId);
        if (!promocoes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await promocoes.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertpromocoes(req, res) {
      const newpromocoes = req.body;
  
      try {
        const createdpromocoes = await models.grupos_permissoes.create(newpromocoes);
  
        return res.status(201).json(createdpromocoes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = promocoesController;
