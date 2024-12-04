import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ApiService } from './api.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private prod = new BehaviorSubject<Array<Product>>([]);
  private filtprod = new BehaviorSubject<Array<Product>>([]);
  products = this.prod.asObservable();
  filteredProducts = this.filtprod.asObservable();


  updateFilteredProducts(products: Product[]) {
    for (let i = 0; i < products.length; i++) {
      products[i].id = i;
    };
    this.filtprod.next(products);
  }

  updateProducts(products: Product[]) {
    this.prod.next(products);
  }

  async syncQuantity() {
    let filtered = await lastValueFrom(this.filteredProducts);
    let total = await lastValueFrom(this.products);
    for (let filterProduct of filtered) {
      for (let original of total) {
        if (filterProduct.title === original.title) {
          original.quantity = filterProduct.quantity;
        }
      }
    }
  }

  updateQuantity(product: Product) {
    let myProducts = this.prod.value;
    for (let myProduct of myProducts) {
      if (myProduct.title === product.title) {
        myProduct.quantity++;
        // break;
      }
    }
    this.prod.next(myProducts);
  }

  loadCart(products: Product[]) {
    let myProducts = this.prod.value;
    let totalQ = 0;
    for (let product of products) {
      for (let myProduct of myProducts) {
        if (product.title === myProduct.title) {
          myProduct.quantity = product.quantity;
          totalQ += product.quantity;
          break;
        }
      }
    }
    this.prod.next(myProducts);
    return totalQ;
  }

  constructor(private _api: ApiService) { }

  initializeProducts() {
    this._api.getData().subscribe(
      (data) => {
        let products = data;
        for (let product of products) {
          product.quantity = 0;
        }
        // console.log(products);
        this.prod.next(products);
        this.filtprod.next(products);
      }, (err) => {
        console.log(err);
      }
    )
  }
}
