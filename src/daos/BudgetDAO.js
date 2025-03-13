const Budget = require('../models/Budget');

class BudgetDAO {
    static async createBudget(budgetData) {
        return await Budget.create(budgetData);
    }

    static async getBudgetById(id) {
        return await Budget.findByPk(id);
    }

    static async getAllBudgets() {
        return await Budget.findAll();
    }

    static async updateBudget(id, budgetData) {
        const budget = await Budget.findByPk(id);
        if (budget) {
            return await budget.update(budgetData);
        }
        return null;
    }

    static async deleteBudget(id) {
        const budget = await Budget.findByPk(id);
        if (budget) {
            return await budget.destroy();
        }
        return null;
    }
}

module.exports = BudgetDAO;