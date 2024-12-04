import { Injectable } from '@angular/core';
import { ProductDataService } from './product-data.service';
import { Product } from '../models/Product';
import { BehaviorSubject } from 'rxjs';
import { CartBody } from '../models/CartBodyPost';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice = 0;
  private totalQ = new BehaviorSubject<number>(0);
  totalQuantity = this.totalQ.asObservable();
  totalProducts!: Product[];
  private products = new BehaviorSubject<Product[]>([]);
  cartProducts = this.products.asObservable();

  getTotalQuantity() {
    return this.totalQ.value;
  }
  getReqBodyCart(): CartBody[] {
    const cartProducts = this.products.value;
    let body = [];
    for (let cartProduct of cartProducts) {
      body[body.length] = {
        product: cartProduct._id,
        quantity: cartProduct.quantity
      }
    }
    return body;
  }
  decreaseCart(num: number) {
    this.totalQ.next(this.totalQ.getValue() - num);
  }
  increaseCart(num: number) {
    this.totalQ.next(this.totalQ.getValue() + num);
  }
  updateCart() {
    this._products.products.subscribe(
      (products) => {
        this.totalProducts = products;
        // console.log("total: ", this.totalProducts);
      }
    );
    this.products.next(this.totalProducts.filter((ele) => ele.quantity));
  }
  constructor(private _products: ProductDataService) { }

}
