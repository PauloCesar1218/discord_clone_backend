const jwt = require("jsonwebtoken");
const { AuthenticationError } = require('apollo-server')

module.exports = ({ req }) => {
  // get the user token from the headers
  const token = req.headers.authorization.split("Bearer ")[1] || "";

  console.log(token);

  // try to retrieve a user with the token
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      throw new AuthenticationError("Token Invalido");
    } else {
      // add the user to the context
      return { user };
    }
  });
};
