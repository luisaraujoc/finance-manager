const UserDAO = require('../daos/UserDAO');
const UserDTO = require('../dtos/UserDTO');

class UserController {
    static async createUser(req, res) {
        try {
            const userData = req.body;
            const user = await UserDAO.createUser(userData);
            const userDTO = new UserDTO(user);
            res.status(201).json(userDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await UserDAO.getUserById(id);
            if (user) {
                const userDTO = new UserDTO(user);
                res.status(200).json(userDTO);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllUsers(req, res) {
        try {
            const users = await UserDAO.getAllUsers();
            const usersDTO = users.map(user => new UserDTO(user));
            res.status(200).json(usersDTO);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateUser(req, res) {
        try {
            const id = req.params.id;
            const userData = req.body;
            const updatedUser = await UserDAO.updateUser(id, userData);
            if (updatedUser) {
                const userDTO = new UserDTO(updatedUser);
                res.status(200).json(userDTO);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const success = await UserDAO.deleteUser(id);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;