import { Injectable } from '@angular/core';
import {Item, Product } from '../models';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private list: Set<Item>;
  constructor() {
    this.list = new Set<Item>();
  }

  public add(product: Product, units: number): void {
    let item: Item = new Item();
    item.product = product;
    item.units = units;
    this.list.add(item);
  }
  public remove(item: Item) {
    this.list.delete(item);
  }
  public update(items: Set<Item>) {
    this.list = items;
  }

  public getItems(): Observable<Set<Item>> {
    return of(this.list);
  }
  public getGrossTotal(): number {
    let total = 0;
    this.list.forEach(item => {
      total += item.getPrice();
    });
    return total;
  }
  public getGrossTotalToString(): string {
    return this.getGrossTotal().toFixed(2) + ' $';
  }
}
