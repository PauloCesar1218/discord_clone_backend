const { Sequelize } = require('sequelize')
const databaseConfig = require('./../config/database')

const User = require('./../model/User');
const Server = require('./../model/Server');
const Messages = require('./../model/Message')
const FriendRequest = require('./../model/FriendRequest')
const Friend = require('./../model/Friends')
const ServersUsers = require('./../model/Server_Users')

const connection = new Sequelize(databaseConfig)
connection.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err))

User.init(connection);
Server.init(connection);
Messages.init(connection);
FriendRequest.init(connection)
Friend.init(connection);
ServersUsers.init(connection);
User.associate(connection.models);
Server.associate(connection.models);
Messages.associate(connection.models);
FriendRequest.associate(connection.models);
Friend.associate(connection.models);
ServersUsers.associate(connection.models);

module.exports = connection;
