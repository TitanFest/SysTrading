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
async function ListaProveedores() {
  try {
    const Proveedor = await models.proveedor.findAll({});
    return Proveedor;
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo obtener la lista de Proveedor" };
  }
}

async function RegistrarProveedor(Proveedor) {
  try {
    const dbUser = await models.proveedor.create({
      ...Proveedor
    });
    return { mensaje: "Proveedor creado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo crear el Proveedor" };
  }
}
/**
 * Funcion para loguear el usuario en la API
 * @param {*} Proveedor objeto con datos de usuario para loguear (nombre, password)
 * @returns un mensaje si el usuario y contraseña son incorrectos, o el objeto usuario obtenido de la base de datos.
 */

async function actualizarProveedor(id, Proveedor) {
  try {
    await models.proveedor.update(Proveedor, {
      where: { idproveedor: id }
    });
    return { mensaje: "Proveedor actualizado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo actualizar el Proveedor" };
  }
}

async function eliminarProveedor(id) {
  try {
    await models.proveedor.destroy({
      where: { idproveedor: id }
    });
    return { mensaje: "Proveedor eliminado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo eliminar el Proveedor" };
  }
}

module.exports = {
  RegistrarProveedor,
  ListaProveedores,
  actualizarProveedor,
  eliminarProveedor,
};