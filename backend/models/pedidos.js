const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Pedidos = sequelize.define('pedidos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_pedido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    metodo_pagamento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    valor_total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    arquivado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'pedidos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pedidos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  Pedidos.associate = (models) => {
    // Associação com o modelo de Cliente
    Pedidos.belongsTo(models.Cliente, {
      foreignKey: 'id',
      as: 'cliente',
    });
  };
  return Pedidos;
};
