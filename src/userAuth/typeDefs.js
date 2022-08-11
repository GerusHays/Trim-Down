const { gql } = require("apollo-server-express");

type Auth {
    token: ID!
    user: User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

module.exports = typeDefs;
