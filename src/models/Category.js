const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const Category = sequelize.define(
    'category', {
    id_category: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(120),
        allowNull: true
    }
}, {
    tableName: 'category',
    timestamps: false
});

module.exports = Category;