const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logs_acesso', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acao: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logs_acesso',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "logs_acesso_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
