const BaseDAO = require('./base.dao');
const db = require('../models');

class PaymentsDAO extends BaseDAO {
  constructor() {
    super(db.payments);
  }

  async findByType(type) {
    try {
      return await this.model.findAll({ where: { type } });
    } catch (error) {
      throw new Error(`Error finding payments by type: ${error.message}`);
    }
  }

  async getBudgetsByPayment(paymentId) {
    try {
      const payment = await this.model.findByPk(paymentId, {
        include: [{
          model: db.budget,
          as: 'budgets'
        }]
      });
      return payment ? payment.budgets : [];
    } catch (error) {
      throw new Error(`Error getting budgets by payment: ${error.message}`);
    }
  }
}

module.exports = new PaymentsDAO();