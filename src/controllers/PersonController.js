const PersonDAO = require('../daos/PersonDAO');
const PersonDTO = require('../dtos/PersonDTO');

class PersonController {
    static async createPerson(req, res) {
        try {
            const personData = req.body;
            const person = await PersonDAO.createPerson(personData);
            const personDTO = new PersonDTO(person);
            res.status(201).json(personDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getPersonById(req, res) {
        try {
            const id = req.params.id;
            const person = await PersonDAO.getPersonById(id);
            if (person) {
                const personDTO = new PersonDTO(person);
                res.status(200).json(personDTO);
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllPersons(req, res) {
        try {
            const persons = await PersonDAO.getAllPersons();
            const personsDTO = persons.map(person => new PersonDTO(person));
            res.status(200).json(personsDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatePerson(req, res) {
        try {
            const id = req.params.id;
            const personData = req.body;
            const updatedPerson = await PersonDAO.updatePerson(id, personData);
            if (updatedPerson) {
                const personDTO = new PersonDTO(updatedPerson);
                res.status(200).json(personDTO);
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletePerson(req, res) {
        try {
            const id = req.params.id;
            const success = await PersonDAO.deletePerson(id);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PersonController;