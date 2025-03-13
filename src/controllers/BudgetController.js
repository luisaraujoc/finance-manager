const BudgetDAO = require('../daos/BudgetDAO');
const BudgetDTO = require('../dtos/BudgetDTO');

class BudgetController {
    static async createBudget(req, res) {
        try {
            const budgetData = req.body;
            const budget = await BudgetDAO.createBudget(budgetData);
            const budgetDTO = new BudgetDTO(budget);
            res.status(201).json(budgetDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getBudgetById(req, res) {
        try {
            const id = req.params.id;
            const budget = await BudgetDAO.getBudgetById(id);
            if (budget) {
                const budgetDTO = new BudgetDTO(budget);
                res.status(200).json(budgetDTO);
            } else {
                res.status(404).json({ message: 'Budget not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllBudgets(req, res) {
        try {
            const budgets = await BudgetDAO.getAllBudgets();
            const budgetsDTO = budgets.map(budget => new BudgetDTO(budget));
            res.status(200).json(budgetsDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateBudget(req, res) {
        try {
            const id = req.params.id;
            const budgetData = req.body;
            const updatedBudget = await BudgetDAO.updateBudget(id, budgetData);
            if (updatedBudget) {
                const budgetDTO = new BudgetDTO(updatedBudget);
                res.status(200).json(budgetDTO);
            } else {
                res.status(404).json({ message: 'Budget not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteBudget(req, res) {
        try {
            const id = req.params.id;
            const success = await BudgetDAO.deleteBudget(id);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Budget not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BudgetController;