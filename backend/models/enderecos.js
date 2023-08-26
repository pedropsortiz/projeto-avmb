const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enderecos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rua: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'enderecos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "enderecos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
