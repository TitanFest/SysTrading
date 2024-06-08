const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rol',
        key: 'idRol'
      }
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'rol_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idRol_idx",
        using: "BTREE",
        fields: [
          { name: "idRol" },
        ]
      },
      {
        name: "idUsuario_idx",
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
    ]
  });
};
