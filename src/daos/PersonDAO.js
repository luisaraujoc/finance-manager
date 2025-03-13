const Person = require('../models/Person');

class PersonDAO {
    static async createPerson(personData) {
        return await Person.create(personData);
    }

    static async getPersonById(id) {
        return await Person.findByPk(id);
    }

    static async getAllPersons() {
        return await Person.findAll();
    }

    static async updatePerson(id, personData) {
        const person = await Person.findByPk(id);
        if (person) {
            return await person.update(personData);
        }
        return null;
    }

    static async deletePerson(id) {
        const person = await Person.findByPk(id);
        if (person) {
            return await person.destroy();
        }
        return null;
    }
}

module.exports = PersonDAO;