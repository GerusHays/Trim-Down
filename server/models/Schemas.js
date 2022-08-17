const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  entryDate: { type: Date, default: Date.now },
});

// Set up middleware
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Compare incoming password with hash
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const expenseSchema = new Schema({
  nicotine: { type: String, required: true },
  alcohol: { type: String, required: true },
  recreationalDrugs: { type: String, required: true },
  streamingServices: { type: String, required: true },
  eatingOut: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "users" },
});

const Users = mongoose.model("users", userSchema, "users");
const Expenses = mongoose.model("expenses", expenseSchema, "expenses");
const mySchemas = { Users: Users, Expenses: Expenses };

module.exports = mySchemas;
