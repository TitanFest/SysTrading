const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pedido', {
    idPedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_de_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    estado: {
        type: DataTypes.ENUM('Nuevo', 'En progreso', 'Completado', 'Cancelado'),
        allowNull: false,
        defaultValue: 'Nuevo',
    },
    fecha_de_entrega: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
};
