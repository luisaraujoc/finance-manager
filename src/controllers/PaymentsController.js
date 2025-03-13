const PaymentsDAO = require('../daos/PaymentsDAO');
const PaymentsDTO = require('../dtos/PaymentsDTO');

class PaymentsController {
    static async createPayment(req, res) {
        try {
            const paymentData = req.body;
            const payment = await PaymentsDAO.createPayment(paymentData);
            const paymentDTO = new PaymentsDTO(payment);
            res.status(201).json(paymentDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getPaymentById(req, res) {
        try {
            const id = req.params.id;
            const payment = await PaymentsDAO.getPaymentById(id);
            if (payment) {
                const paymentDTO = new PaymentsDTO(payment);
                res.status(200).json(paymentDTO);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllPayments(req, res) {
        try {
            const payments = await PaymentsDAO.getAllPayments();
            const paymentsDTO = payments.map(payment => new PaymentsDTO(payment));
            res.status(200).json(paymentsDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatePayment(req, res) {
        try {
            const id = req.params.id;
            const paymentData = req.body;
            const updatedPayment = await PaymentsDAO.updatePayment(id, paymentData);
            if (updatedPayment) {
                const paymentDTO = new PaymentsDTO(updatedPayment);
                res.status(200).json(paymentDTO);
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletePayment(req, res) {
        try {
            const id = req.params.id;
            const success = await PaymentsDAO.deletePayment(id);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PaymentsController;