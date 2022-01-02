const User = require("../model/User");
const Server = require('../model/Server');
const ServersUsers = require('../model/Server_Users')

class ServerController {
  static async getServer() {
    return await User.findAll()
  }

  static async getServerByUserID({ user_id }) {
    const userServers = await ServersUsers.findAll({
      where: {
        user_id
      },
      raw: true
    })
    console.log(userServers);
    return userServers
  }

  static async store(server) {
    const { name, user_id } = server; 

    const createdServer = await Server.create({ name, server_owner: user_id });
    console.log(createdServer.dataValues.id, 'createdServer');
    await this.asignUserToServer({user: {id: user_id}, server: {id: createdServer.dataValues.id}})
    // const serverUser = await ServersUsers.create({user_id, server_id: createdServer.dataValues.id})
    // console.log(serverUser, 'serverUser');

    return createdServer.dataValues;
  }

  static async asignUserToServer({user, server}) {
    const { id } = user
    const targetServer = await Server.findByPk(server.id);
    const userToAsign = await User.findByPk(id)

    if (!userToAsign || !targetServer) {
      return 'User or server not found'
    }

    const serverUser = await ServersUsers.build({UserId: id, ServerId: server.id})
    await serverUser.save();

    return `${userToAsign.name} added to ${targetServer.name} successfully`
  }

}

module.exports = ServerController;
