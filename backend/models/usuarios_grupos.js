const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_grupos', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'usuarios_grupos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuarios_grupos_pkey",
        unique: true,
        fields: [
          { name: "id_usuario" },
          { name: "id_grupo" },
        ]
      },
    ]
  });
};
