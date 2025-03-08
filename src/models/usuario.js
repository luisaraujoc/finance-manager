const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 256],
          msg: "A senha deve ter entre 6 e 256 caracteres",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "Usuario",
    timestamps: false
  },
);

module.exports = Usuario;