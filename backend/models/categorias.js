const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_categoria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'categorias',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categorias_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
