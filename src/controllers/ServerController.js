const User = require("../model/User");
const Server = require('../model/Server');

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

    if (!userToAsign || !targetServer) {
      return 'User or server not found'
    }

    console.log(userToAsign);
    await userToAsign.addServer(targetServer);

    return `${userToAsign.name} added to ${targetServer.name} successfully`
  }

}

module.exports = ServerController;
