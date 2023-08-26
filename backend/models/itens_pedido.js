const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itens_pedido', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pedido: {
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
    }
  }, {
    sequelize,
    tableName: 'itens_pedido',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "itens_pedido_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
