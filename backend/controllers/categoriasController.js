
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class categoriasController {
  static async findAllcategoriass(req, res) {
    try {
      const allcategoriass = await models.categorias.findAll();
      return res.status(200).json(allcategoriass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnecategorias(req, res) {
      const groupId = req.params.id;
  
      try {
        const categorias = await models.grupos_permissoes.findByPk(groupId);
        if (!categorias) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(categorias);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatecategorias(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const categorias = await models.grupos_permissoes.findByPk(groupId);
        if (!categorias) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await categorias.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertcategorias(req, res) {
      const newcategorias = req.body;
  
      try {
        const createdcategorias = await models.grupos_permissoes.create(newcategorias);
  
        return res.status(201).json(createdcategorias);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = categoriasController;
