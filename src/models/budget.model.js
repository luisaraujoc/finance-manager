module.exports = (sequelize, Sequelize) => {
  const Budget = sequelize.define(
    "budget",
    {
      id_budget: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(64),
        defaultValue: "Indefinido",
      },
      description: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
      },
      type: {
        type: Sequelize.ENUM("expense", "revenue"),
        allowNull: false,
      },
      id_category: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
      },
    },
    {
      tableName: "budget",
      timestamps: false,
    }
  );

  return Budget;
};
