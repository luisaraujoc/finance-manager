const express = require('express');
const BudgetController = require('../controllers/BudgetController');
const router = express.Router();

router.post('/budgets', BudgetController.createBudget);
router.get('/budgets/:id', BudgetController.getBudgetById);
router.get('/budgets', BudgetController.getAllBudgets);
router.put('/budgets/:id', BudgetController.updateBudget);
router.delete('/budgets/:id', BudgetController.deleteBudget);

module.exports = router;