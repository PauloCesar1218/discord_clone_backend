require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
const context = (ctx) => ctx;

const server = new ApolloServer({ typeDefs, resolvers, context });

require('./database/connectionFactory');
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
