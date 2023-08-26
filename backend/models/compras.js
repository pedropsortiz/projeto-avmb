const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compras', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_fornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_compra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total: {
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
    tableName: 'compras',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "compras_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
