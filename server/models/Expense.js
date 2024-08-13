const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const expenseSchema = new Schema(
    {
    expenseName: {
        type: String,
        required: 'Expense name is required',
        minlenght: 1,
    },
    expenseAmount: {
        type: String,
        required: 'Expense amount is required',
        min:1
    },
    expenseDate: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
   
});

const Expense = model('Expense', expenseSchema);

module.exports = Expense;