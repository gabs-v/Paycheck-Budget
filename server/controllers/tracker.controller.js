const Expense = require('../models/tracker.model');

const findAllExpenses = (req, res) => {
    Expense.find()
    .then((allExpenses) => {
        res.json({ allExpenses });
    })
    .catch((err) => console.log(err));
};

const newExpenseEntry = (req, res) => {
    Expense.create(req.body)
    .then(newExpense => {
        res.json({ newExpense });
    })
    .catch((err) => console.log(err));
};

module.exports = {
    findAllExpenses,
    newExpenseEntry
};


