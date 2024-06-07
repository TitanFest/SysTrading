const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const jwt = require("jsonwebtoken");
const sequelize = require("./config-db");
const initModels = require("../models/init-models");
const models = initModels(sequelize);

/**
 * usamos bcrypt para encriptar la constraseña del usuario y comparar la contraseña encriptada en BD.
 */
const bcrypt = require("bcrypt");
const { json } = require("express");
const { where } = require("sequelize");
/**
 * Esta funcion se utiliza para registrar un usuario en la base de datos
 * @param {*} user objeto tiene los datos del usuario (ejem: nombre,password)
 * @returns un mensaje si el usuario ha sido creado o no
 */
async function ListaUsuarios() {
  try {
    const usuarios = await models.usuario.findAll({
      attributes: { exclude: ['password'] }
    });
    return usuarios;
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo obtener la lista de usuarios" };
  }
}

async function registrar(usuario) {
  const passwordCifrado = await bcrypt.hash(usuario.Contraseña, 10);
  try {
    const dbUser = await models.usuario.create({
      ...usuario,
      Contraseña: passwordCifrado,
    });
    return { mensaje: "Usuario creado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo crear el usuario" };
  }
}
/**
 * Funcion para loguear el usuario en la API
 * @param {*} user objeto con datos de usuario para loguear (nombre, password)
 * @returns un mensaje si el usuario y contraseña son incorrectos, o el objeto usuario obtenido de la base de datos.
 */
async function login(user) {
  try {
    const dbUser = await models.usuario.findOne({
      where: {
        Correo: user.Correo,
      },
    });
    if (!dbUser) {
      return { mensaje: "Usuario/Contraseña incorrectos" };
    }
    let esPasswordValido = await bcrypt.compare(user.Contraseña, dbUser.Contraseña);
    if (!esPasswordValido) {
      return { mensaje: "Usuario/Contraseña incorrectos" };
    }
    const token = jwt.sign(
      { idUsuario: dbUser.idUsuario, Correo: dbUser.Correo },
      "secret",
      {
        expiresIn: "30m",
      }
    );
    return { token };
  } catch (error) {
    console.log(error);
    return { mensaje: "Usuario/Contraseña incorrectos" };
  }
}

async function actualizarUsuario(id, user) {
  try {
    if (user.Contraseña) {
      user.Contraseña = await bcrypt.hash(user.Contraseña, 10);
    }
    await models.usuario.update(user, {
      where: { idUsuario:  id }
    });
    return { mensaje: "Usuario actualizado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo actualizar el usuario "+error };
  }
}

async function eliminarUsuario(id) {
  try {
    await models.usuario.destroy({
      where: { idUsuario: id }
    });
    return { mensaje: "Usuario eliminado exitosamente" };
  } catch (error) {
    console.log(error);
    return { mensaje: "No se pudo eliminar el usuario" };
  }
}

module.exports = {
  registrar,
  login,
  ListaUsuarios,
  actualizarUsuario,
  eliminarUsuario,
};
