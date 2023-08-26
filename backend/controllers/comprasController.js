
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class comprasController {
  static async findAllcomprass(req, res) {
    try {
      const allcomprass = await models.compras.findAll();
      return res.status(200).json(allcomprass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnecompras(req, res) {
      const groupId = req.params.id;
  
      try {
        const compras = await models.grupos_permissoes.findByPk(groupId);
        if (!compras) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(compras);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatecompras(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const compras = await models.grupos_permissoes.findByPk(groupId);
        if (!compras) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await compras.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertcompras(req, res) {
      const newcompras = req.body;
  
      try {
        const createdcompras = await models.grupos_permissoes.create(newcompras);
  
        return res.status(201).json(createdcompras);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = comprasController;
