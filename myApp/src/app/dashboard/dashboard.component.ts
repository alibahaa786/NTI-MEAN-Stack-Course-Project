import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Product } from '../models/Product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  currentlyEdited = '';
  myProducts!: Product[];
  constructor(private _productsData: ProductDataService, private _api: ApiService) { }
  ngOnInit(): void {
    this._productsData.products.subscribe({
      next: products => this.myProducts = products
    })
  }

  toggleEdit(productName: string) {
    this.currentlyEdited = productName
  }

  removeProduct(product: Product) {
    this._api.removeProduct(product).subscribe({
      next: res => {
        this._productsData.initializeProducts();
        console.log(res.successMsg);
      },
      error: err => console.log(err.message)
    });
  }
  updateProduct(product: Product) {
    this.currentlyEdited = '',
      this._api.updateProduct(product).subscribe({
        next: res => {
          this._productsData.initializeProducts();
          console.log(res);
        },
        error: err => console.log(err.message)
      })
  }
}
