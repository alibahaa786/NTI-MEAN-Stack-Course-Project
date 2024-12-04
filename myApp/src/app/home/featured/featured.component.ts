import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent  implements OnInit {
  products!: Product[];
  constructor(private _products:ProductDataService){}
  ngOnInit(): void {
    // this.products = this._products.getProduct();
    this._products.products.subscribe(
      (products) => {
        this.products = products;
      }
    )
  }
}
