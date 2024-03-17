const { Sequelize } = require("sequelize");
const { db_name, db_host, db_user, db_password } = require("../config");

module.exports = new Sequelize(
    db_name,
    db_user,
    db_password,
    {
        host: db_host,
        port: "5432",
        dialect: "postgres"
    }
);