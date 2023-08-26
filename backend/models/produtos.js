const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos', {
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
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preco_de_venda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    preco_de_custo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidade_em_estoque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_de_validade: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_original: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    arquivado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'produtos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produtos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
