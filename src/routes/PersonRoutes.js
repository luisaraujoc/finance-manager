const express = require('express');
const PersonController = require('../controllers/PersonController');
const router = express.Router();

router.post('/persons', PersonController.createPerson);
router.get('/persons/:id', PersonController.getPersonById);
router.get('/persons', PersonController.getAllPersons);
router.put('/persons/:id', PersonController.updatePerson);
router.delete('/persons/:id', PersonController.deletePerson);

module.exports = router;