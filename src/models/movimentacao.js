const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Movimentacao extends Model {}

Movimentacao.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuarios',
            key: 'id',
        },
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categorias',
            key: 'id',
        },
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    tipo: {
        type: DataTypes.ENUM('entrada', 'saida'),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Movimentacao',
});

module.exports = Movimentacao;