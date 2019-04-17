"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const Address = require("./address");
class Marchant {
    constructor() {
        this.id = null;
        this.name = '';
        this.address = new Address();
        this.phone = '';
        this.email = '';
        this.rating = 0;
    }
}
module.exports = Marchant;
