const BaseDAO = require('./base.dao');
const db = require('../models');

class UserDAO extends BaseDAO {
  constructor() {
    super(db.user);
  }

  async findByEmail(email) {
    try {
      return await this.model.findOne({ where: { email } });
    } catch (error) {
      throw new Error(`Error finding user by email: ${error.message}`);
    }
  }

  async findByUsername(username) {
    try {
      return await this.model.findOne({ where: { username } });
    } catch (error) {
      throw new Error(`Error finding user by username: ${error.message}`);
    }
  }

  async activateUser(userId) {
    try {
      const user = await this.model.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return await user.update({ isActive: true });
    } catch (error) {
      throw new Error(`Error activating user: ${error.message}`);
    }
  }

  async getPerson(userId) {
    try {
      const user = await this.model.findByPk(userId, {
        include: [{
          model: db.person,
          as: 'person'
        }]
      });
      return user ? user.person : null;
    } catch (error) {
      throw new Error(`Error getting person for user: ${error.message}`);
    }
  }
}

module.exports = new UserDAO();