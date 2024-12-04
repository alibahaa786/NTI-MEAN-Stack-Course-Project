import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  products!: any[];
  sortValueBy = "best";
  constructor(private _products:ProductDataService){}
  ngOnInit(): void {
    // this.products = this._products.getProduct();
    this._products.filteredProducts.subscribe(
      (products) => {
        this.products = products;
      }
    )
  }
  updateSort(value: string){
    this.sortValueBy = value;
  }
}
