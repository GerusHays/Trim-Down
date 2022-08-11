const { signToken } = require("../userAuth/auth");


addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);
  
    return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
  
    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }
  
    const correctPw = await user.isCorrectPassword(password);
  
    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }
  
    const token = signToken(user);
    return { token, user };
  }



const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
  },
};

module.exports = resolvers;
