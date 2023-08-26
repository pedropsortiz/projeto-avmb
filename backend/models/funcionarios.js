const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('funcionarios', {
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
    cargo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    salario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    data_de_admissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_de_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    data_de_desligamento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_coordenador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'funcionarios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "funcionarios_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
