import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss'],
  providers: [ProductService]
})
export class ShelfComponent implements OnInit {

  // products: Observable<Product[]>
  products: Product[];

  /*= {
    id: 9999,
    name: "test",
    price: 10.2,
    category: "cattest",
    section: "sectest",
    rating: 5.0,
    promotion: 0,
    images: null
}*/

  constructor(private prodService: ProductService) {
    this.prodService.getProducts()
      .subscribe((data: Product[]) => this.products = data);
    // this.products = this.prodService.getProducts();
  }

  ngOnInit() {
  }

}
