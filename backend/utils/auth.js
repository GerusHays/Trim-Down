const jwt = require("jsonwebtoken");

const secret = "supersecret";
const expiration = "2h";

module.exports = {
  signToken: function ({ username, email, _id, fullname }) {
    const payload = { username, email, _id, fullname };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
