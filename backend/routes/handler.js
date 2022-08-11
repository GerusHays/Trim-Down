const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas');

router.get('/expenses', async (req, res) => {
    const expenses = Schemas.Expenses;

    // this code will get all expenses
    // const userExpenses = await expenses.find({}, (err, expensesData) => {
    
    // this code will get all expenses and join the user table
    const userExpense = await expenses.find({}).populate("user").exec((err, expensesData) => {
        if (err) throw err;
        if (expensesData) {
            res.end(JSON.stringify(expensesData));
        } else {
            res.end();
        }
    });
});

router.post('/addExpense', async (req, res) => {
    // tentative code pending frontend naming convention
    const userExpenses = req.body.expenseInput;
    const user = Schemas.Users;
    const userId = await user.findOne({username:'mrkrabs'}).exec();

    const newExpense = new Schemas.Expenses({
        expense: userExpenses,
        user: userId._id
    });

    try {
        await newExpense.save( (err, newExpenseResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/expenses');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/expenses');
        res.end();
    }
});

// Uncomment to add a new user document to our users table
// To use this, we need to run the backend server, then go to URL: localhost:4000/addUser
// router.get('/addUser', async (req, res) => {
//     const user = {username: 'mrkrabs', fullname: 'Joe Schmo'};
//     const newUser = new Schemas.Users(user);
//     try {
//         await newUser.save( async(err, newUserResult) => {
//             console.log('New user created!');
//             res.end('New user created!');
//         });
//     } catch(err) {
//         console.log(err);
//         res.end('User not added!');
//     }
// });

module.exports = router;