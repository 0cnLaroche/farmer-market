"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const Address = require("./address");
class User {
    constructor() {
        this.id = null;
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.address = new Address();
    }
}
module.exports = User;
