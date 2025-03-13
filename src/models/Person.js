const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const Person = sequelize.define(
    'person', {
    id_Person: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    CPF: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        unique: true
    },
    isActive: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'person',
    timestamps: false
});

module.exports = Person;