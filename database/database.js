const mysqlConnection = require("mysql2/promise");

const properties = {
  host: "localhost",
  user: "root",
  password: "",
  database: "libreria",
};

const pool = mysqlConnection.createPool(properties);

module.exports = pool;
