const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: Int!,
    name: String!,
    email: String!,
    password: String,
    token: String,
  }

  input UserId {
    id: Int
  }

  type Server {
    id: Int,
    name: String,
    server_owner: Int
  }

  input ServerId {
    id: Int
  }

  type Query {
    # User Queries
    getUsers: [User],
    login(email: String, password: String): User,

    # Server Queries
    getServer: [Server]!
    getServerByUserID(user_id: String): [Server]
  }

  type Mutation {
    # User Mutations
    addUser(name: String, email: String, password: String): User,
    addUserToServer(server: ServerId, user: UserId): String
    addMessagesToServer(server: Int, user: Int, content: String): String

    # Server Mutations
    addServer(name: String, user_id: Int): Server
  }
`;