
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class usuarios_gruposController {
  static async findAllusuarios_gruposs(req, res) {
    try {
      const allusuarios_gruposs = await models.usuarios_grupos.findAll();
      return res.status(200).json(allusuarios_gruposs);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneusuarios_grupos(req, res) {
      const groupId = req.params.id;
  
      try {
        const usuarios_grupos = await models.grupos_permissoes.findByPk(groupId);
        if (!usuarios_grupos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(usuarios_grupos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateusuarios_grupos(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const usuarios_grupos = await models.grupos_permissoes.findByPk(groupId);
        if (!usuarios_grupos) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await usuarios_grupos.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertusuarios_grupos(req, res) {
      const newusuarios_grupos = req.body;
  
      try {
        const createdusuarios_grupos = await models.grupos_permissoes.create(newusuarios_grupos);
  
        return res.status(201).json(createdusuarios_grupos);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = usuarios_gruposController;
