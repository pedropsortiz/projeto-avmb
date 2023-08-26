const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Clientes = sequelize.define('clientes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "clientes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  Clientes.associate = (models) => {
    // Associação com o modelo de Cliente
    Clientes.hasMany(models.Pedidos, {
      foreignKey: 'id_cliente',
      as: 'cliente',
    });
  };
  return Clientes;
};
