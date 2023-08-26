const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itens_compra', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_compra: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nota_fiscal: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itens_compra',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "itens_compra_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
