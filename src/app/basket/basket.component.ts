import { Component, OnInit } from '@angular/core';
import {Item, Product } from '../models';
import {BasketService} from '../services/basket.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  items: Set<Item>;

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.getItems();

  }
  getItems(): void {
    this.basketService.getItems()
      .subscribe(items => {
        this.items = items; });
  }
  removeItem(item: Item) {
    this.items.delete(item);
    //this.basketService.remove()
  }
  getGrossTotalToString() {
    return this.basketService.getGrossTotalToString();
  }



}
