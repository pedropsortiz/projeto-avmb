
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class clientesController {
  static async findAllclientess(req, res) {
    try {
      const allclientess = await models.clientes.findAll();
      return res.status(200).json(allclientess);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneclientes(req, res) {
      const groupId = req.params.id;
  
      try {
        const clientes = await models.grupos_permissoes.findByPk(groupId);
        if (!clientes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(clientes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateclientes(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const clientes = await models.grupos_permissoes.findByPk(groupId);
        if (!clientes) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await clientes.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertclientes(req, res) {
      const newclientes = req.body;
  
      try {
        const createdclientes = await models.grupos_permissoes.create(newclientes);
  
        return res.status(201).json(createdclientes);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = clientesController;
