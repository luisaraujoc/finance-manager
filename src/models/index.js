const dbConfig = require("../config/database.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.category = require("./category.model.js")(sequelize, Sequelize);
db.budget = require("./budget.model.js")(sequelize, Sequelize);
db.payments = require("./payments.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.person = require("./person.model.js")(sequelize, Sequelize);

// Definir associações
db.category.hasMany(db.budget, { foreignKey: "id_category" });
db.budget.belongsTo(db.category, { foreignKey: "id_category" });

db.budget.belongsToMany(db.payments, {
  through: "payments_budget",
  foreignKey: "id_budget",
  otherKey: "id_payments",
});
db.payments.belongsToMany(db.budget, {
  through: "payments_budget",
  foreignKey: "id_payments",
  otherKey: "id_budget",
});

db.user.hasOne(db.person, { foreignKey: "id_user" });
db.person.belongsTo(db.user, { foreignKey: "id_user" });

db.budget.belongsToMany(db.person, {
  through: "budget_person",
  foreignKey: "id_budget",
  otherKey: "id_person",
});
db.person.belongsToMany(db.budget, {
  through: "budget_person",
  foreignKey: "id_person",
  otherKey: "id_budget",
});

db.category.belongsToMany(db.person, {
  through: "category_person",
  foreignKey: "id_category",
  otherKey: "id_person",
});
db.person.belongsToMany(db.category, {
  through: "category_person",
  foreignKey: "id_person",
  otherKey: "id_category",
});

module.exports = db;
