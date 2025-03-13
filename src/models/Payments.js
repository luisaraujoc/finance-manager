const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const Payments = sequelize.define(
    'payments', {
    id_Payments: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('credit card', 'debit card', 'billet', 'livecash'),
        allowNull: true
    }
}, {
    tableName: 'payments',
    timestamps: false
});

module.exports = Payments;