const Expense = require('../models/tracker.model')


    module.exports.findAllExpenses = (req,res) => {
        Expense.find
            .then((allExpenses) => {
                res.json({expenses: allExpenses})
            })
            .catch((err) => console.log(err))
    },
    module.exports.createAnExpense = (req, res) => {
        Expense.create
            .then((newExpense) => {
                res.json({expense: newExpense})
            })
            .catch((err) => console.log(err))
    }
