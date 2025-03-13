class BudgetDTO {
    constructor({ id_budget, name, description, value, date, type, id_category }) {
        this.id_budget = id_budget;
        this.name = name;
        this.description = description;
        this.value = value;
        this.date = date;
        this.type = type;
        this.id_category = id_category;
    }
}

module.exports = BudgetDTO;