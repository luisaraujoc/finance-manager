const Category = require('./models/Category');
const Budget = require('./models/Budget');
const Payments = require('./models/Payments');
const Person = require('./models/Person');
const User = require('./models/User');
const PaymentsBudget = require('./models/PaymentsBudget');
const PersonBudget = require('./models/PersonBudget');

// Associações
Budget.belongsTo(Category, { foreignKey: 'id_category' });
Category.hasMany(Budget, { foreignKey: 'id_category' });

PaymentsBudget.belongsTo(Payments, { foreignKey: 'id_Payments' });
Payments.hasMany(PaymentsBudget, { foreignKey: 'id_Payments' });

PaymentsBudget.belongsTo(Budget, { foreignKey: 'id_budget' });
Budget.hasMany(PaymentsBudget, { foreignKey: 'id_budget' });

PersonBudget.belongsTo(Person, { foreignKey: 'id_Person' });
Person.hasMany(PersonBudget, { foreignKey: 'id_Person' });

PersonBudget.belongsTo(Budget, { foreignKey: 'id_budget' });
Budget.hasMany(PersonBudget, { foreignKey: 'id_budget' });

User.belongsTo(Person, { foreignKey: 'person_id' });
Person.hasOne(User, { foreignKey: 'person_id' });