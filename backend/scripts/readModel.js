const fs = require('fs');
const path = require('path');

const outputDirectory = '.\\controllers\\'; // Diretório de saída

const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);



console.log(models)




Object.keys(models).forEach(model => {
  console.log(model)
  const modelName = model;
  const controllerContent = `
const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

class ${modelName}Controller {
  static async findAll${modelName}s(req, res) {
    try {
      const all${modelName}s = await models.${modelName}.findAll();
      return res.status(200).json(all${modelName}s);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ${modelName}Controller;
`;

  const controllerFileName = `${modelName}Controller.js`;
  const controllerFilePath = path.join(outputDirectory, controllerFileName);

  fs.writeFile(controllerFilePath, controllerContent, 'utf-8', err => {
    if (err) {
      console.error('Erro ao escrever o arquivo do controller:', err);
      return;
    }
    console.log(`Arquivo ${controllerFileName} gerado com sucesso.`);
  });
});
