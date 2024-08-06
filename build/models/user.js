"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(id, username, phone, email) {
        this.id = id;
        this.username = username;
        this.phone = phone;
        this.email = email;
    }
    getUserId() {
        return this.id;
    }
    getUserName() {
        return this.username;
    }
    getUserPhone() {
        return this.phone;
    }
    getUserEmail() {
        return this.email;
    }
    setUserId(id) {
        this.id = id;
    }
    setUserName(username) {
        this.username = username;
    }
    setUserPhone(phone) {
        this.phone = phone;
    }
    setUserEmail(email) {
        this.email = email;
    }
    toString() {
        return this.id + " " + this.username + " " + this.phone + " " + this.email;
    }
}
exports.user = user;
