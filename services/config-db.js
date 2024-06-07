const config = require("../config");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  ...config.db,
  dialect: "mysql",
});

//sequelize.sync({force: true})

module.exports = sequelize;
