const usersController = require('../controllers/UserController');
const ServerController = require('../controllers/ServerController');
module.exports = {
  Query: {
    getUsers: async (_, args, context) => await usersController.getUsers(context),
    login: async (_, args, context) => await usersController.login(args),
    getServerByUserID: async (_, args, context) => await ServerController.getServerByUserID(args),
    getServer: async (_, args, context) => await ServerController.getServer(args),
     
  },
  Mutation: {
    addUser: async (_, args, context) => await usersController.store(args),
    addServer: async (_, args, context) => await ServerController.store(args),
    addUserToServer: async (_, args, context) => ServerController.asignUserToServer(args),
    addMessagesToServer: async (_, args, context) => usersController.sendMessage(args)
  }
}
