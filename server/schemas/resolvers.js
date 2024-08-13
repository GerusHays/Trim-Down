const { AuthenticationError } = require("apollo-server-express");
const { User, Expense } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
             .select('-__v -password')
             .populate('expenses');
          return userData;
      }

      throw new AuthenticationError("You are not authenticated");
    },
    
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("expenses");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("expenses");
    },
    expenses: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Expense.find(params).sort({ expenseDate: -1 });
    },

    expense: async (parent, {_id }) => {
        return Expense.findById(_id);
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
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
    addExpense: async (parent, args, context) => {
      if(context.user){
        const expense = await Expense.create({ ...args});

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { expenses: expense._id } },
          { new: true }
        );
        return expense
      }
      throw new AuthenticationError("You are not authenticated");
    }
  },
};

module.exports = resolvers;
