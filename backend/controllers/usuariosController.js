
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class usuariosController {
  static async findAllusuarioss(req, res) {
    try {
      const allusuarioss = await models.usuarios.findAll();
      return res.status(200).json(allusuarioss);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOneusuarios(req, res) {
      const groupId = req.params.id;
  
      try {
        const usuarios = await models.usuarios.findByPk(groupId);
        if (!usuarios) {
          return res.status(404).json({ message: "Erro 4040. Requisição não encontrada" });
        }
        return res.status(200).json(usuarios);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updateusuarios(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const usuarios = await models.usuarios.findByPk(groupId);
        if (!usuarios) {
          return res.status(404).json({ message: "Erro 4040. Requisição não encontrada" });
        }
        
        await usuarios.update(updatedData);
  
        return res.status(200).json({ message: "Requisição atualizada com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertusuarios(req, res) {
      const newusuarios = req.body;
  
      try {
        const createdusuarios = await models.usuarios.create(newusuarios);
  
        return res.status(201).json(createdusuarios);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = usuariosController;
