const User = require("../model/User");
const { Op } = require("sequelize");
const JWToken = require("jsonwebtoken");
const verifyToken = require("./../util/verifyToken")

class UserController {
  static async getUsers(ctx) {
    try {
      verifyToken(ctx)
      const users = await User.findAll();
  
      return users;
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  static async store(user) {
    const { name, email, password } = user;

    const createdUser = await User.create({ name, email, password });
    return createdUser;
  }

  static async sendMessage(message) {
    const { userId, serverId, content } = message;
    console.log({ userId, serverId, content });
    const createdUser = await User;
    return createdUser;
  }

  static async login(user) {
    const { email, password } = user;
    const authUser = await User.findAll({
      where: {
        [Op.and]: [{ email }, { password }],
      },
    });

    if (authUser.length)
      return JWToken.sign(authUser[0].dataValues, process.env.SECRET_KEY);
    else return "Email ou senha incorretos";
  }
}

module.exports = UserController;
