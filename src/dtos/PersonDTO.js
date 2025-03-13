class PersonDTO {
    constructor({ id_Person, FirstName, LastName, CPF, isActive }) {
        this.id_Person = id_Person;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.CPF = CPF;
        this.isActive = isActive;
    }
}

module.exports = PersonDTO;