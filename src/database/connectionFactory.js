const { Sequelize } = require('sequelize')
const databaseConfig = require('./../config/database')

const User = require('./../model/User');
const Server = require('./../model/Server');

const connection = new Sequelize(databaseConfig)
connection.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err))

User.init(connection);
Server.init(connection);
User.associate(connection.models);
Server.associate(connection.models);

module.exports = connection;
