const fs = require('fs');
const path = require('path');

const outputDirectory = '.\\backend\\routes\\'; // Diretório de saída

const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

Object.keys(models).forEach(async (model) => {
  const modelName = model;
  const routeContent = `
    const { Router } = require("express");
    const ${modelName}Controller = require("../controllers/${modelName}Controller.js");

    const router = Router();

    router.get("/${modelName}", ${modelName}Controller.findAll${modelName}s);
    router.get("/${modelName}/:id", ${modelName}Controller.findOne${modelName});
    router.put("/${modelName}/:id", ${modelName}Controller.update${modelName});
    router.post("/${modelName}", ${modelName}Controller.insert${modelName});

    module.exports = router;
  `;

  const filePath = path.join(__dirname, '..', 'controllers', `${modelName}Controller.js`);
  const newFileName = `${modelName}routes.js`;
  const newFilePath = path.join(outputDirectory, newFileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo de entrada:', err);
      return;
    }

    const newContent = data.replace('Controller.js', '');
    
    fs.writeFile(newFilePath,  routeContent, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Erro ao criar o novo arquivo de saída:', writeErr);
        return;
      }
      console.log(`Arquivo de saída criado com sucesso em ${newFilePath}`);
    });
  });
});
