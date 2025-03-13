class UserDTO {
    constructor({ id_User, email, username, password, isActive, person_id }) {
        this.id_User = id_User;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isActive = isActive;
        this.person_id = person_id;
    }
}

module.exports = UserDTO;