const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: Int,
    name: String,
    email: String,
    password: String,
  }

  input UserId {
    id: Int
  }

  type Server {
    id: Int,
    name: String
  }

  input ServerId {
    id: Int
  }

  type Query {
    # User Queries
    getUsers: [User],
    login(email: String, password: String): String,

    # Server Queries
    getServer: [Server]!
  }

  type Mutation {
    # User Mutations
    addUser(name: String, email: String, password: String): User,
    addUserToServer(server: ServerId, user: UserId): String
    addMessagesToServer(server: Int, user: Int, content: String): String

    # Server Mutations
    addServer(name: String): Server
  }
`;