const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupos_permissoes', {
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_permissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'grupos_permissoes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "grupos_permissoes_pkey",
        unique: true,
        fields: [
          { name: "id_grupo" },
          { name: "id_permissao" },
        ]
      },
    ]
  });
};
