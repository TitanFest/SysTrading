const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Apellido: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Cedula: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "Cedula_UNIQUE"
    },
    Correo: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "Correo_UNIQUE"
    },
    FechaNac: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    'Contraseña': {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "Cedula_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Cedula" },
        ]
      },
      {
        name: "Correo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Correo" },
        ]
      },
    ]
  });
};
