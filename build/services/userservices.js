"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor() {
        this.user = [];
    }
    addUser(user) {
        this.user.push(user);
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
    }
    updateUser(newuser, id) {
        const index = this.user.findIndex(user => user.id === id);
        if (index !== -1) {
            this.user[index] = newuser;
        }
        console.log("user ubdated");
    }
}
exports.default = UserService;
