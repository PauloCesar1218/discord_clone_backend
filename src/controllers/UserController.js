const User = require("../model/User");
const { Op } = require("sequelize");
const JWToken = require("jsonwebtoken");
const verifyToken = require("./../util/verifyToken")
const { UserInputError } = require('apollo-server');
const { promisify } = require('util')
const sleep = promisify(setTimeout)
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
    try {
      await sleep(2000)
      const { email, password } = user;
      const authUser = await User.findOne({
        where: {
          [Op.and]: [{ email }, { password }],
        },
        raw: true
      })
  
      
      if(!authUser) throw new UserInputError('Email ou senha incorreto(s)')
      return {...authUser, token: JWToken.sign(authUser, process.env.SECRET_KEY)}
    } catch (error) {
      return error
    }
  }
}

module.exports = UserController;
