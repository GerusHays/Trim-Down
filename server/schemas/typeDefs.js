// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    expenses: [Expense]
  }
  type Expense {
    _id: ID
    expenseName: String
    expenseAmount: Float
    expenseDate: String
    username: String
  }
  type Query {
    me: User
    expenses(username: String): [Expense]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    expenses(username: String): [Expense]
    expense(id: ID!): Expense
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addExpense(expenseName: String!, expenseAmount: Float!): Expense
  }

`;

// export the typeDefs
module.exports = typeDefs;
