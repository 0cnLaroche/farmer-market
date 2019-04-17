"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor() {
        this.street = String();
        this.city = String();
        this.state = String();
        this.postalcode = String();
        this.country = String();
        this.latitude = null;
        this.longitude = null;
    }
}
module.exports = Address;
