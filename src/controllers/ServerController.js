const User = require("../model/User");
const Server = require('../model/Server');
const ServersUsers = require('../model/Server_Users')

class ServerController {
  static async getServer() {
    return await User.findAll()
 
  }

  static async store(server) {
    const { name } = server; 

    const createdServer = await Server.create({ name });
    console.log(createdServer);

    return createdServer.dataValues;
  }

  static async asignUserToServer({user, server}) {
    const { id } = user

    const userToAsign = await User.findByPk(id)
    const targetServer = await Server.findByPk(server.id);

    console.log(userToAsign, targetServer, "LOGS");
    if (!userToAsign || !targetServer) {
      return 'User or server not found'
    }
    console.log({user_id: id, server_id: server.id});
    console.log(targetServer);
    const serverUser = await ServersUsers.create({user_id: 1, server_id: 1})
    console.log(serverUser);

    return `${userToAsign.name} added to ${targetServer.name} successfully`
  }

}

module.exports = ServerController;
