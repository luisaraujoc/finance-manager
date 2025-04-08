module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id_user: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      username: {
        type: Sequelize.STRING(124),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(256),
        allowNull: false,
        validade: {
          len: [8, 256],
          // caracteres especiais
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
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );

  return User;
};
