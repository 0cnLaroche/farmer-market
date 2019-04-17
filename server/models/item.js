"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class Item {
    constructor() {
        this.units = 0;
        this.product = new product_1.Product();
    }
    getPrice() {
        return this.product.price * this.units;
    }
    getPriceToString() {
        return this.getPrice().toFixed(2) + ' $';
    }
}
exports.Item = Item;
