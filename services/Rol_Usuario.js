const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const sequelize = require("./config-db");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const modeloFuncion = models.rol_usuario;

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
async function ListaRoles_Usuario() {
  try {
    const Proveedor = await modeloFuncion.findAll({});
    return Proveedor;
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo obtener la lista de Roles_Usuario" };
  }
}

async function RegistrarRoles_Usuario(rol) {
  try {
    const dbUser = await modeloFuncion.create({
      ...rol
    });
    return { mensaje: "Roles_Usuario creado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo crear el Roles_Usuario" };
  }
}
/**
 * Funcion para loguear el usuario en la API
 * @param {*} Rol objeto con datos de usuario para loguear (nombre, password)
 * @returns un mensaje si el usuario y contraseña son incorrectos, o el objeto usuario obtenido de la base de datos.
 */

async function actualizarRoles_Usuario(id, Rol) {
  try {
    await modeloFuncion.update(Rol, {
      where: { idRol: id }
    });
    return { mensaje: "Roles_Usuario actualizado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo actualizar el Roles_Usuario" };
  }
}

async function eliminarRoles_Usuario(id) {
  try {
    await modeloFuncion.destroy({
      where: { idRol: id }
    });
    return { mensaje: "Roles_Usuario eliminado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo eliminar el Roles_Usuario" };
  }
}

module.exports = {
  RegistrarRoles_Usuario,
  ListaRoles_Usuario,
  actualizarRoles_Usuario,
  eliminarRoles_Usuario,
};