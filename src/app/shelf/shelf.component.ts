import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss'],
  providers: [ProductService]
})
export class ShelfComponent implements OnInit {
  products: Product[];

  constructor(private prodService: ProductService) {
    this.prodService.getProducts()
      .subscribe((data: Product[]) => this.products = data);
    // this.products = this.prodService.getProducts();
  }

  ngOnInit() {
  }

}
