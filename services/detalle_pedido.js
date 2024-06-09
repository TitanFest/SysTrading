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
async function ListaDetalle_pedido() {
  try {
    const detalle_pedido = await models.detalle_pedido.findAll({});
    return detalle_pedido;
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo obtener la lista de Detalle del pedido" };
  }
}

async function RegistrarDetalle_pedido(detalle_pedido) {
  try {
    const dbUser = await models.detalle_pedido.create({
      ...detalle_pedido
    });

    return { mensaje: "detalle del pedido creado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo crear el detalle del pedido" };
  }
}
/**
 * Funcion para loguear el usuario en la API
 * @param {*} pedido objeto con datos de usuario para loguear (nombre, password)
 * @returns un mensaje si el usuario y contraseña son incorrectos, o el objeto usuario obtenido de la base de datos.
 */

async function actualizarDetalle_pedido(id, detalle_pedido) {
  try {
    await models.detalle_pedido.update(detalle_pedido, {
      where: { idDetalle: id }
    });
    return { mensaje: "Detalle de pedido actualizado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo actualizar el detalle del pedido" };
  }
}

async function eliminarDetalle_pedido(id) {
  try {
    await models.detalle_pedido.destroy({
      where: { idDetalle: id }
    });
    return { mensaje: "Detalle del pedido eliminado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo eliminar detalle del pedido" };
  }
}

module.exports = {
  RegistrarDetalle_pedido,
  ListaDetalle_pedido,
  actualizarDetalle_pedido,
  eliminarDetalle_pedido,
};

