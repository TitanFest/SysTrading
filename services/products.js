const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const jwt = require("jsonwebtoken");
const sequelize = require("./config-db");
const initModels = require("../models/init-models");
const products = require("../models/products");
const models = initModels(sequelize);

async function registrar(product) {
  try {
    const dbProduct = await models.products.create({ ...product });
    return {
      mensaje: "Producto creado exitosamente",
      idProduct: dbProduct.idproduct,
    };
  } catch (error) {
    console.log(error);
    return { message: "No se pudo crear el producto" };
  }
}
module.exports = {
  registrar,
};
