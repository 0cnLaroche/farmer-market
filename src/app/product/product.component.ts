import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../models/product';
import { BasketService } from '../services/basket.service';
import { ProductService } from '../services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private basketService: BasketService) {

  }

  ngOnInit() {
  }
  addToBasket(units: number): void {
    this.basketService.add(this.product, units);
  }

}
