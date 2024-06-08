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
async function ListaRol() {
  try {
    const Proveedor = await models.rol.findAll({});
    return Proveedor;
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo obtener la lista de Rol" };
  }
}

async function RegistrarRol(rol) {
  try {
    const dbUser = await models.rol.create({
      ...rol
    });
    return { mensaje: "Rol creado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo crear el Rol" };
  }
}
/**
 * Funcion para loguear el usuario en la API
 * @param {*} Rol objeto con datos de usuario para loguear (nombre, password)
 * @returns un mensaje si el usuario y contraseña son incorrectos, o el objeto usuario obtenido de la base de datos.
 */

async function actualizarRol(id, Rol) {
  try {
    await models.rol.update(Rol, {
      where: { idRol: id }
    });
    return { mensaje: "Rol actualizado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo actualizar el Rol" };
  }
}

async function eliminarRol(id) {
  try {
    await models.rol.destroy({
      where: { idRol: id }
    });
    return { mensaje: "Rol eliminado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo eliminar el Rol" };
  }
}

module.exports = {
  RegistrarRol,
  ListaRol,
  actualizarRol,
  eliminarRol,
};