const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historico_estoque', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantidade_anterior: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantidade_atualizada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    diferenca: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_alteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    motivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_compra: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'historico_estoque',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "historico_estoque_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
