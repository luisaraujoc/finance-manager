const CategoryDAO = require('../daos/CategoryDAO');
const CategoryDTO = require('../dtos/CategoryDTO');

class CategoryController {
    static async createCategory(req, res) {
        try {
            const categoryData = req.body;
            const category = await CategoryDAO.createCategory(categoryData);
            const categoryDTO = new CategoryDTO(category);
            res.status(201).json(categoryDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getCategoryById(req, res) {
        try {
            const id = req.params.id;
            const category = await CategoryDAO.getCategoryById(id);
            if (category) {
                const categoryDTO = new CategoryDTO(category);
                res.status(200).json(categoryDTO);
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllCategories(req, res) {
        try {
            const categories = await CategoryDAO.getAllCategories();
            const categoriesDTO = categories.map(category => new CategoryDTO(category));
            res.status(200).json(categoriesDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateCategory(req, res) {
        try {
            const id = req.params.id;
            const categoryData = req.body;
            const updatedCategory = await CategoryDAO.updateCategory(id, categoryData);
            if (updatedCategory) {
                const categoryDTO = new CategoryDTO(updatedCategory);
                res.status(200).json(categoryDTO);
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteCategory(req, res) {
        try {
            const id = req.params.id;
            const success = await CategoryDAO.deleteCategory(id);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CategoryController;