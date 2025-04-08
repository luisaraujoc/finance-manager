class BaseDAO {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
        return await this.model.create(data);
      } catch (error) {
        throw new Error(`Error creating ${this.model.name}: ${error.message}`);
      }
    }
  
    async findAll(options = {}) {
      try {
        return await this.model.findAll(options);
      } catch (error) {
        throw new Error(`Error finding all ${this.model.name}: ${error.message}`);
      }
    }
  
    async findById(id, options = {}) {
      try {
        return await this.model.findByPk(id, options);
      } catch (error) {
        throw new Error(`Error finding ${this.model.name} by id: ${error.message}`);
      }
    }
  
    async update(id, data) {
      try {
        const record = await this.model.findByPk(id);
        if (!record) {
          throw new Error(`${this.model.name} not found`);
        }
        return await record.update(data);
      } catch (error) {
        throw new Error(`Error updating ${this.model.name}: ${error.message}`);
      }
    }
  
    async delete(id) {
      try {
        const record = await this.model.findByPk(id);
        if (!record) {
          throw new Error(`${this.model.name} not found`);
        }
        await record.destroy();
        return true;
      } catch (error) {
        throw new Error(`Error deleting ${this.model.name}: ${error.message}`);
      }
    }
  }
  
  module.exports = BaseDAO;