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

const getAll${tableName} = async (req, res) => {
    try {
        const ${tableName.toLowerCase()} = await ${tableName}.findAll({});
        res.json(${tableName.toLowerCase()});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno" });
    }
}

const get${tableName}ById = async (req, res) => {
    try {
        const ${tableName.toLowerCase()} = await ${tableName}.findByPk(req.params.id);
        res.json(${tableName.toLowerCase()});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

const create${tableName} = async (req, res) => {
    try {
        const new${tableName} = await ${tableName}.create(req.body);
        res.json(new${tableName});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar ${tableName.toLowerCase()}" });
    }
}

const update${tableName} = async (req, res) => {
    try {
        const ${tableName.toLowerCase()} = await ${tableName}.findByPk(req.params.id);
        if (!${tableName.toLowerCase()}) {
            return res.status(404).json({ message: "${tableName.toLowerCase()} não encontrado" });
        }
        
        await ${tableName.toLowerCase()}.update(req.body);
        res.json({ message: "${tableName.toLowerCase()} atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar ${tableName.toLowerCase()}" });
    }
}

module.exports = {
    getAll${tableName},
    get${tableName}ById,
    create${tableName},
    update${tableName}
}
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

