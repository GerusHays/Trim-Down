const { faker } = require('@faker-js/faker');
const db = require('../config/connection');
const { User, Expense } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});
    await Expense.deleteMany({});
    console.log('Database connected and ready to seed');

    // create fake users
    const users = [];

    for (let i = 0; i < 10; i += 1) {
        const username = faker.name.firstName();
        const email = faker.internet.email(username);
        const password = "password1";

        users.push({ username, email, password });
    }

    console.log('Seeding users...');
    console.log(users);
    const createdUsers = await User.insertMany(users);
    console.log('Users seeded!');
    console.log(createdUsers);
    // Create fake expenses
    // let createdExpenses = [];
    // for (let i = 0; i < 20; i += 1) {
    //     const expenseName = faker.commerce.productName();
    //     const expenseAmount = faker.commerce.price();

    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    //     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    //     const createdExpense = await Expense.create({ expenseName, expenseAmount, username });

    //     const updatedUser = await User.updateOne(
    //         { _id: userId },
    //         { $push: { expenses: createdExpense._id } },
    //     );

    //     createdExpenses.push(createdExpense);
    // }

    console.log('All done!');
    process.exit(0);
   
});