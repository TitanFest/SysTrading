var DataTypes = require("sequelize").DataTypes;
var _proveedor = require("./proveedor");
var _rol = require("./rol");
var _rol_usuario = require("./rol_usuario");
var _usuario = require("./usuario");
var _products = require("./products");
var _pedido = require("./pedido");
var _detalles = require("./detalle_pedido")

function initModels(sequelize) {
  var proveedor = _proveedor(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var rol_usuario = _rol_usuario(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var detalle_pedido = _detalles(sequelize, DataTypes);

  rol_usuario.belongsTo(rol, { as: "idRol_rol", foreignKey: "idRol"});
  rol.hasMany(rol_usuario, { as: "rol_usuarios", foreignKey: "idRol"});
  rol_usuario.belongsTo(usuario, { as: "idUsuario_usuario", foreignKey: "idUsuario"});
  usuario.hasMany(rol_usuario, { as: "rol_usuarios", foreignKey: "idUsuario"});

  return {
    proveedor,
    rol,
    rol_usuario,
    usuario,
    products,
    pedido,
    detalle_pedido,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
