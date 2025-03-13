const Payments = require('../models/Payments');

class PaymentsDAO {
    static async createPayment(paymentData) {
        return await Payments.create(paymentData);
    }

    static async getPaymentById(id) {
        return await Payments.findByPk(id);
    }

    static async getAllPayments() {
        return await Payments.findAll();
    }

    static async updatePayment(id, paymentData) {
        const payment = await Payments.findByPk(id);
        if (payment) {
            return await payment.update(paymentData);
        }
        return null;
    }

    static async deletePayment(id) {
        const payment = await Payments.findByPk(id);
        if (payment) {
            return await payment.destroy();
        }
        return null;
    }
}

module.exports = PaymentsDAO;