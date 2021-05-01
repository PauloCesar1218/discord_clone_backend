const usersController = require('../controllers/UserController');
const ServerController = require('../controllers/ServerController');
module.exports = {
  Query: {
    getUsers: async (parent, args, context) => await usersController.getUsers(context),
    login: async (parent, args, context) => await usersController.login(args)
  },
  Mutation: {
    addUser: async (parent, args, context) => await usersController.store(args),
    addServer: async (parent, args, context) => await ServerController.store(args),
    addUserToServer: async (parent, args, context) => ServerController.asignUserToServer(args)
  }
}
