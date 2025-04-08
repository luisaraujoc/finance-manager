module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "category",
    {
      id_category: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(45),
        defaultValue: "Indefinido",
      },
      description: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
    },
    {
      tableName: "category",
      timestamps: false,
    }
  );

  return Category;
};
