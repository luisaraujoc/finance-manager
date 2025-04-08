const BaseDAO = require('./base.dao');
const db = require('../models');

class BudgetDAO extends BaseDAO {
  constructor() {
    super(db.budget);
  }

  async findByType(type) {
    try {
      return await this.model.findAll({ where: { type } });
    } catch (error) {
      throw new Error(`Error finding budgets by type: ${error.message}`);
    }
  }

  async findByDateRange(startDate, endDate) {
    try {
      return await this.model.findAll({
        where: {
          date: {
            [db.Sequelize.Op.between]: [startDate, endDate]
          }
        }
      });
    } catch (error) {
      throw new Error(`Error finding budgets by date range: ${error.message}`);
    }
  }

  async addPayment(budgetId, paymentId) {
    try {
      const budget = await this.model.findByPk(budgetId);
      if (!budget) {
        throw new Error('Budget not found');
      }
      await budget.addPayments(paymentId);
      return true;
    } catch (error) {
      throw new Error(`Error adding payment to budget: ${error.message}`);
    }
  }
}

module.exports = new BudgetDAO();