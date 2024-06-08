const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedor', {
    idproveedor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(145),
      allowNull: false
    },
    Telefono: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    unit_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproveedor" },
        ]
      },
      {
        name: "correo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "correo" },
        ]
      },
    ]
  });
};
