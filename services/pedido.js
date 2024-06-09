const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const sequelize = require("./config-db");
const initModels = require("../models/init-models");
const models = initModels(sequelize);

/**
 * usamos bcrypt para encriptar la constraseña del usuario y comparar la contraseña encriptada en BD.
 */
const { json } = require("express");
const { where } = require("sequelize");
/**
 * Esta funcion se utiliza para registrar un usuario en la base de datos
 * @param {*} user objeto tiene los datos del usuario (ejem: nombre,password)
 * @returns un mensaje si el usuario ha sido creado o no
 */
async function ListaPedido() {
  try {
    const pedido = await models.pedido.findAll({});
    return pedido;
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo obtener la lista de pedido" };
  }
}

async function RegistrarPedido(pedido) {
  try {
    const dbUser = await models.pedido.create({
      ...pedido
    });
    return { mensaje: "pedido creado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo crear el pedido" };
  }
}
/**
 * Funcion para loguear el usuario en la API
 * @param {*} pedido objeto con datos de usuario para loguear (nombre, password)
 * @returns un mensaje si el usuario y contraseña son incorrectos, o el objeto usuario obtenido de la base de datos.
 */

async function actualizarPedido(id, pedido) {
  try {
    await models.pedido.update(pedido, {
      where: { idPedido: id }
    });
    return { mensaje: "Rol actualizado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo actualizar el Rol" };
  }
}

async function eliminarPedido(id) {
  try {
    await models.pedido.destroy({
      where: { idPedido: id }
    });
    return { mensaje: "pedido eliminado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo eliminar el pedido" };
  }
}

module.exports = {
  RegistrarPedido,
  ListaPedido,
  actualizarPedido,
  eliminarPedido,
};
