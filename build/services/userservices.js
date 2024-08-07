"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger/logger");
class UserService {
    constructor() {
        this.user = [];
    }
    addUser(user) {
        this.user.push(user);
        logger_1.logger.info("user added");
    }
    getUserbyId(id) {
        console.log(this.user.find(user => user.id === id));
        return this.user.find(user => user.id === id);
    }
    getUsers() {
        return this.user;
    }
    removeUser(id) {
        const index = this.user.findIndex(user => user.id === id);
        if (index !== -1) {
            this.user.splice(index, 1);
        }
        console.log(this.user);
        logger_1.logger.info("user removed");
    }
    updateUser(newuser, id) {
        const index = this.user.findIndex(user => user.id === id);
        if (index !== -1) {
            this.user[index] = newuser;
        }
        console.log("user ubdated");
        logger_1.logger.info("user updated");
    }
}
exports.default = UserService;
