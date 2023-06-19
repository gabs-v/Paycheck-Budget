const expenseController = require('../controllers/tracker.controller')

module.exports = (app) => {
    app.get('/api/expenses', expenseController.findAllExpenses)
    app.post('/api/expenses', expenseController.newExpenseEntry)
}