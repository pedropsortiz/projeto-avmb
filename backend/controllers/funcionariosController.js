
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class funcionariosController {
  static async findAllfuncionarioss(req, res) {
    try {
      const allfuncionarioss = await models.funcionarios.findAll();
      return res.status(200).json(allfuncionarioss);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
    static async findOnefuncionarios(req, res) {
      const groupId = req.params.id;
  
      try {
        const funcionarios = await models.grupos_permissoes.findByPk(groupId);
        if (!funcionarios) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        return res.status(200).json(funcionarios);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async updatefuncionarios(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const funcionarios = await models.grupos_permissoes.findByPk(groupId);
        if (!funcionarios) {
          return res.status(404).json({ message: "Grupo de permissões não encontrado." });
        }
        
        await funcionarios.update(updatedData);
  
        return res.status(200).json({ message: "Grupo de permissões atualizado com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insertfuncionarios(req, res) {
      const newfuncionarios = req.body;
  
      try {
        const createdfuncionarios = await models.grupos_permissoes.create(newfuncionarios);
  
        return res.status(201).json(createdfuncionarios);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = funcionariosController;
