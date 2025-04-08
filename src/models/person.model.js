module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define(
    "person",
    {
      id_person: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        unique: true,
      },
      FirstName: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      LastName: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      CPF: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "person",
      timestamps: false,
    }
  );

  return Person;
};
