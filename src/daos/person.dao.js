const BaseDAO = require("./base.dao");
const db = require("../models");

class PersonDAO extends BaseDAO {
  constructor() {
    super(db.person);
  }

  async findByCPF(cpf) {
    try {
      return await this.model.findOne({ where: { CPF: cpf } });
    } catch (error) {
      throw new Error(`Error finding person by CPF: ${error.message}`);
    }
  }

  async getUser(personId) {
    try {
      const person = await this.model.findByPk(personId, {
        include: [
          {
            model: db.user,
            as: "user",
          },
        ],
      });
      return person ? person.user : null;
    } catch (error) {
      throw new Error(`Error getting user for person: ${error.message}`);
    }
  }

  async getBudgets(personId) {
    try {
      const person = await this.model.findByPk(personId, {
        include: [
          {
            model: db.budget,
            as: "budgets",
          },
        ],
      });
      return person ? person.budgets : [];
    } catch (error) {
      throw new Error(`Error getting budgets for person: ${error.message}`);
    }
  }

  async getCategories(personId) {
    try {
      const person = await this.model.findByPk(personId, {
        include: [
          {
            model: db.category,
            as: "categories",
          },
        ],
      });
      return person ? person.categories : [];
    } catch (error) {
      throw new Error(`Error getting categories for person: ${error.message}`);
    }
  }
}

module.exports = new PersonDAO();
