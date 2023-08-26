const fs = require('fs');
const path = require('path');

const modelFilePath = '.\\models\\clientes.js'; // Caminho do arquivo do modelo
const outputDirectory = '.\\controllers\\'; // Diretório de saída

fs.readFile(modelFilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo do modelo:', err);
    return;
  }

  const { tableName, fieldNames } = extractTableAndFieldNames(data);

  const importStatement = `const ${tableName} = require('../models/${tableName}.js');`;

  const controllerContent = `
${importStatement}

const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");

var models = initModels(sequelize)

class ${tableName}Controller {
  static async pegaTodasAsP${tableName}(req, res) {
    try {
     
      const todasAs${tableName} = await models.pedidos.findAll({where: {id_cliente: 2}});
      return res.status(200).json(todasAs${tableName});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ${tableName}aController;
`;

  const controllerFileName = `${tableName}Controller.js`;
  const controllerFilePath = path.join(outputDirectory, controllerFileName);

  fs.writeFile(controllerFilePath, controllerContent, 'utf-8', err => {
    if (err) {
      console.error('Erro ao escrever o arquivo do controller:', err);
      return;
    }
    console.log(`Arquivo ${controllerFileName} gerado com sucesso.`);
  });
});

function extractTableAndFieldNames(modelData) {
  const tableNameRegex = /return sequelize.define\('(\w+)'/;
  const tableNameMatch = modelData.match(tableNameRegex);
  const tableName = tableNameMatch ? capitalizeFirstLetter(tableNameMatch[1]) : 'N/A';

  const fieldRegex = /([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*{/g;
  const matches = [...modelData.matchAll(fieldRegex)];
  const fieldNames = matches.map(match => match[1]);

  return { tableName, fieldNames };
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

