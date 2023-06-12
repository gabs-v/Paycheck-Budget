const ExpenseController = require('../controllers/tracker.controller')

module.exports = app => {
    app.get('/allExpenses', ExpenseController.findAllExpenses)
    app.post('/newExpense', ExpenseController.createAnExpense)
}