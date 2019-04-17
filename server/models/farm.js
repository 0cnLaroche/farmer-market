"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const Address = require("./address");
class Farm {
    constructor() {
        this.id = null;
        this.name = '';
        this.address = new Address();
        this.rating = 0;
    }
}
module.exports = Farm;
