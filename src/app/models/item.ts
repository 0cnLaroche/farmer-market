import { Product } from './product';

export class Item {
  units: number;
  product: Product;

  constructor() {
    this.units = 0;
    this.product = new Product();
  }
  public getPrice(): number {
    return this.product.price * this.units;
  }
  public getPriceToString(): string {
    return this.getPrice().toFixed(2) + ' $';
  }
}
