const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('VERMELHO', 'usuario_vermelho', 'asfg12@3', {
  host: '172.27.32.199',
  dialect: 'postgres', // Substitua pelo dialeto do seu banco de dados
});

var initModels = require("../models/init-models.js");
var models = initModels(sequelize);

console.log(models);

// Lista de modelos válidos
const validModels = ['usuarios', 'produtos']; // Exemplos de nomes de modelos

// Gerar controllers
const outputDirectoryControllers = '.\\backend\\controllers\\'; // Diretório de saída para os controllers

Object.keys(models).forEach(model => {
  if (!validModels.includes(model)) {
    console.log(`Modelo "${model}" não está na lista de modelos válidos. Ignorando.`);
    return;
  }

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
    static async findOne${modelName}(req, res) {
      const groupId = req.params.id;
  
      try {
        const ${modelName} = await models.${modelName}.findByPk(groupId);
        if (!${modelName}) {
          return res.status(404).json({ message: "Erro 404. Requisição não encontrada" });
        }
        return res.status(200).json(${modelName});
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async update${modelName}(req, res) {
      const groupId = req.params.id;
      const updatedData = req.body;
  
      try {
        const ${modelName} = await models.${modelName}.findByPk(groupId);
        if (!${modelName}) {
          return res.status(404).json({ message: "Erro 404. Requisição não encontrada" });
        }
        
        await ${modelName}.update(updatedData);
  
        return res.status(200).json({ message: "Requisição atualizada com sucesso." });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  
    static async insert${modelName}(req, res) {
      const new${modelName} = req.body;
  
      try {
        const created${modelName} = await models.${modelName}.create(new${modelName});
  
        return res.status(201).json(created${modelName});
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = ${modelName}Controller;
`;

  const controllerFileName = `${modelName}Controller.js`;
  const controllerFilePath = path.join(outputDirectoryControllers, controllerFileName);

  fs.writeFile(controllerFilePath, controllerContent, 'utf-8', err => {
    if (err) {
      console.error('Erro ao escrever o arquivo do controller:', err);
      return;
    }
    console.log(`Arquivo ${controllerFileName} gerado com sucesso.`);
  });
});


// Gerar rotas
const outputDirectoryRoutes = '.\\backend\\routes\\'; // Diretório de saída para as rotas
var requireLine = ''
var useLine  = ''


Object.keys(models).forEach(async (model) => {
  if (!validModels.includes(model)) {
    console.log(`Modelo "${model}" não está na lista de modelos válidos. Ignorando.`);
    return;
  }

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

 requireLine += `const ${modelName}Route = require("./${modelName}routes.js");\n`
 useLine  += `app.use(${modelName}Route);\n`

  const filePath = path.join(__dirname, '..', 'controllers', `${modelName}Controller.js`);
  const newFileName = `${modelName}routes.js`;
  const newFilePath = path.join(outputDirectoryRoutes, newFileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo de entrada:', err);
      return;
    }

    const newContent = data.replace('Controller.js', '');
    
    fs.writeFile(newFilePath, routeContent, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Erro ao criar o novo arquivo de saída:', writeErr);
        return;
      }
      console.log(`Arquivo de saída criado com sucesso em ${newFilePath}`);
    });
  });
});

const generateIndexFile = () => {
    const routesPath = path.join('./backend/routes');
    const routeFiles = fs.readdirSync(routesPath).filter(file => file.endsWith('.js') && file !== 'index.js');
  
    let indexContent = 'const bodyParser = require("body-parser"); const cors = require(\'cors\')\n';
  
    indexContent += requireLine;
    indexContent += 'module.exports = (app) => {\n';
    indexContent += '  app.use(cors());\n';
    indexContent += '  app.use(bodyParser.json());\n';
    indexContent += useLine;
    indexContent += '};\n';
  
    const indexPath = path.join(routesPath, 'index.js');
    fs.writeFileSync(indexPath, indexContent);
    console.log('index.js file generated successfully.');
  };
  
  generateIndexFile();