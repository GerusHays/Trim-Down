const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:true},
    fullname: {type:String, required:true},
    email: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
});

const expenseSchema = new Schema({
    nicotine: {type:String, required:true},
    alcohol: {type:String, required:true},
    recreationalDrugs: {type:String, required:true},
    streamingServices: {type:String, required:true},
    eatingOut: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'},
});

const Users = mongoose.model('users', userSchema, 'users');
const Expenses = mongoose.model('expenses', expenseSchema, 'expenses');
const mySchemas = {'Users':Users, 'Expenses':Expenses};

module.exports = mySchemas;