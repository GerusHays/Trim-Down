const { Users } = require("../models/Schemas.js");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
// const { TiArrowSyncOutline } = require("react-icons/ti");

const resolvers = {
  Query: {
    me: async (parent, args) => {
      const userData = await Users.findOne({ _id: context.user._id });

      return userData;
    },
    users: async () => {
      return Users.find().select("-__v -password");
    },
    user: async (parent, args) => {
      const userData = await Users.findOne({ username: args.username });
      return userData;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await Users.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await Users.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
