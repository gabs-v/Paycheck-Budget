const ExpenseController = require('../controllers/tracker.controller')

module.exports = (app) => {
    app.get('/api/expenses', ExpenseController.findAllExpenses)
    app.post('/api/expenses', ExpenseController.newExpenseEntry)
}