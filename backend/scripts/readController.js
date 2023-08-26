const fs = require('fs');
const path = require('path');

// Leitura do controller
const controllerFilePath = path.join('./controllers/comprasController.js');
const controllerContent = fs.readFileSync(controllerFilePath, 'utf-8');

// Extrair nome da classe e método do controller
const classNameMatch = controllerContent.match(/class (\w+)/);
const methodNameMatch = controllerContent.match(/static async (\w+)\(/);

if (!classNameMatch || !methodNameMatch) {
  console.error('Não foi possível extrair o nome da classe ou do método do controller.');
  process.exit(1);
}

const className = classNameMatch[1];
const methodName = methodNameMatch[1];

// Gerar o conteúdo do arquivo de rotas personalizado
const routeContent = `
const { Router } = require("express");
const ${className} = require("../controllers/${className}.js");

const router = Router();

router.get("/pessoas", ${className}.${methodName});

module.exports = router;
`;

// Escrever o conteúdo no arquivo de rotas
const routeFilePath = path.join(__dirname, 'routes.js');
fs.writeFileSync(routeFilePath, routeContent, 'utf-8');

console.log('Arquivo de rotas personalizado foi gerado com sucesso!');
