const express = require('express');
const PaymentsController = require('../controllers/PaymentsController');
const router = express.Router();

router.post('/payments', PaymentsController.createPayment);
router.get('/payments/:id', PaymentsController.getPaymentById);
router.get('/payments', PaymentsController.getAllPayments);
router.put('/payments/:id', PaymentsController.updatePayment);
router.delete('/payments/:id', PaymentsController.deletePayment);

module.exports = router;