const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fornecedores', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    contato: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fornecedores',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fornecedores_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
