const Category = require('../models/Category');

class CategoryDAO {
    static async createCategory(categoryData) {
        return await Category.create(categoryData);
    }

    static async getCategoryById(id) {
        return await Category.findByPk(id);
    }

    static async getAllCategories() {
        return await Category.findAll();
    }

    static async updateCategory(id, categoryData) {
        const category = await Category.findByPk(id);
        if (category) {
            return await category.update(categoryData);
        }
        return null;
    }

    static async deleteCategory(id) {
        const category = await Category.findByPk(id);
        if (category) {
            return await category.destroy();
        }
        return null;
    }
}

module.exports = CategoryDAO;