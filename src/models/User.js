const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const User = sequelize.define(
  'user', {
    id_User: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: true,
        validate: {
            len: [6, 256],
            notNull: true,
            len: {
              args: [6, 256],
              msg: "A senha deve ter entre 6 e 256 caracteres",
            },
            // caracteres especiais
            is: {
              args: /(?=.*[!@#$%^&*])/,
              msg: "A senha deve conter pelo menos um caracter especial",
            },
            // letras maiúsculas
            is: {
              args: /(?=.*[A-Z])/,
              msg: "A senha deve conter pelo menos uma letra maiúscula",
            },
            // letras minúsculas
            is: {
              args: /(?=.*[a-z])/,
              msg: "A senha deve conter pelo menos uma letra minúscula",
            },
            // números
            is: {
              args: /(?=.*[0-9])/,
              msg: "A senha deve conter pelo menos um número",
            },
        }
    },
    isActive: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    person_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Person',
            key: 'id_Person'
        }
    }
}, {
    tableName: 'user',
    timestamps: false
});

module.exports = User;