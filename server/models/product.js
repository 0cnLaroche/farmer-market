"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const Marchant = require("./marchant");
const Farm = require("./farm");
class Product {
    constructor() {
        this.id = null;
        this.name = '';
        this.price = null;
        this.category = '';
        this.section = '';
        this.rating = 0;
        this.promotion = 0;
        this.images = [];
        this.farmId = null;
        this.farmName = '';
        //this.farm = new Farm();
        this.vendor = new Marchant();
    }
}
exports.Product = Product;
