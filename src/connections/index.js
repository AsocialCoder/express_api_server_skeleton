const mongoConnection = require("./Mongo");
const mysqlConnection = require("./Mysql");

module.exports = {
  mongo: mongoConnection,
  mysql: mysqlConnection
};
