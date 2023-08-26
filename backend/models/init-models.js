var DataTypes = require("sequelize").DataTypes;
var _avaliacoes = require("./avaliacoes");
var _categorias = require("./categorias");
var _clientes = require("./clientes");
var _compras = require("./compras");
var _enderecos = require("./enderecos");
var _fornecedores = require("./fornecedores");
var _funcionarios = require("./funcionarios");
var _grupos = require("./grupos");
var _grupos_permissoes = require("./grupos_permissoes");
var _historico_estoque = require("./historico_estoque");
var _historico_precos = require("./historico_precos");
var _itens_compra = require("./itens_compra");
var _itens_pedido = require("./itens_pedido");
var _logs_acesso = require("./logs_acesso");
var _pedidos = require("./pedidos");
var _permissoes = require("./permissoes");
var _produtos = require("./produtos");
var _promocoes = require("./promocoes");
var _usuarios = require("./usuarios");
var _usuarios_grupos = require("./usuarios_grupos");

function initModels(sequelize) {
  var avaliacoes = _avaliacoes(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var clientes = _clientes(sequelize, DataTypes);
  var compras = _compras(sequelize, DataTypes);
  var enderecos = _enderecos(sequelize, DataTypes);
  var fornecedores = _fornecedores(sequelize, DataTypes);
  var funcionarios = _funcionarios(sequelize, DataTypes);
  var grupos = _grupos(sequelize, DataTypes);
  var grupos_permissoes = _grupos_permissoes(sequelize, DataTypes);
  var historico_estoque = _historico_estoque(sequelize, DataTypes);
  var historico_precos = _historico_precos(sequelize, DataTypes);
  var itens_compra = _itens_compra(sequelize, DataTypes);
  var itens_pedido = _itens_pedido(sequelize, DataTypes);
  var logs_acesso = _logs_acesso(sequelize, DataTypes);
  var pedidos = _pedidos(sequelize, DataTypes);
  var permissoes = _permissoes(sequelize, DataTypes);
  var produtos = _produtos(sequelize, DataTypes);
  var promocoes = _promocoes(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var usuarios_grupos = _usuarios_grupos(sequelize, DataTypes);


  return {
    avaliacoes,
    categorias,
    clientes,
    compras,
    enderecos,
    fornecedores,
    funcionarios,
    grupos,
    grupos_permissoes,
    historico_estoque,
    historico_precos,
    itens_compra,
    itens_pedido,
    logs_acesso,
    pedidos,
    permissoes,
    produtos,
    promocoes,
    usuarios,
    usuarios_grupos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
