
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class enderecosController {
  static async findAllenderecoss(req, res) {
    try {
      const allenderecoss = await models.enderecos.findAll();
      return res.status(200).json(allenderecoss);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneenderecos(req, res) {
      const groupId = req.params.id;
  
      try {
        const enderecos = await models.grupos_permissoes.findByPk(groupId);
        if (!enderecos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(enderecos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateenderecos(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const enderecos = await models.grupos_permissoes.findByPk(groupId);
        if (!enderecos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await enderecos.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertenderecos(req, res) {
      const newenderecos = req.body;
  
      try {
        const createdenderecos = await models.grupos_permissoes.create(newenderecos);
  
        return res.status(201).json(createdenderecos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = enderecosController;
