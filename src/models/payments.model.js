module.exports = (sequelize, Sequelize) => {
    const Payments = sequelize.define("payments", {
      id_payments: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(45),
        defaultValue: 'Indefinido',
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM('credit card', 'debit card', 'billet', 'livecash'),
        allowNull: false
      }
    }, {
      tableName: 'payments',
      timestamps: false
    });
  
    return Payments;
  };