const BaseDAO = require('./base.dao');
const db = require('../models');

class CategoryDAO extends BaseDAO {
  constructor() {
    super(db.category);
  }

  async findByName(name) {
    try {
      return await this.model.findOne({ where: { name } });
    } catch (error) {
      throw new Error(`Error finding category by name: ${error.message}`);
    }
  }

  async getBudgetsByCategory(categoryId) {
    try {
      const category = await this.model.findByPk(categoryId, {
        include: [{
          model: db.budget,
          as: 'budgets'
        }]
      });
      return category ? category.budgets : [];
    } catch (error) {
      throw new Error(`Error getting budgets by category: ${error.message}`);
    }
  }
}

module.exports = new CategoryDAO();