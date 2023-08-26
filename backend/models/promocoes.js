const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocoes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_promocao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    desconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    data_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promocoes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "promocoes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
