const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const router = express.Router();

router.post('/categories', CategoryController.createCategory);
router.get('/categories/:id', CategoryController.getCategoryById);
router.get('/categories', CategoryController.getAllCategories);
router.put('/categories/:id', CategoryController.updateCategory);
router.delete('/categories/:id', CategoryController.deleteCategory);

module.exports = router;