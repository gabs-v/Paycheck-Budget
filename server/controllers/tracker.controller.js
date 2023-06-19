const Expense = require('../models/tracker.model')


module.exports = {
    findAllExpenses: (req,res) =>{
        Expense.find({})
        .then((allExpenses) => {
            res.json({expenses: allExpenses})
        })
        .catch((err) => console.log(err))
    },
    newExpenseEntry: (res, req) => {
        Expense.create(req.body)
        .then(newExpense => {
            res.json({expense: newExpense})
        })
    }
}
