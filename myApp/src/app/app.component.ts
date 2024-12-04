import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './services/product-data.service';
import { UserDataService } from './services/user-data.service';
import { ApiService } from './services/api.service';
import { CartComponent } from './checkout/cart/cart.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myApp';
  ngOnInit(): void {
    this._productsData.initializeProducts();
    this._user.initiateUser();
    if (this._api.getToken()) {
      this._api.getCart().subscribe({
        next: (products) => {
          const totalQ = this._productsData.loadCart(products);
          const totalPrice = products.reduce((total, product)=> total + (product.price * product.quantity), 0);
          this._cart.totalPrice = totalPrice;
          this._cart.updateCart();
          this._cart.increaseCart(totalQ);
        },
        error: err => console.log(err)
      })
    }
  }
  constructor (private _productsData: ProductDataService, private _user: UserDataService, private _api: ApiService, private _cart: CartService) {
    window.onbeforeunload= () => {
      if (this._api.getToken()){
        this._api.postCart(this._cart.getReqBodyCart()).subscribe();
      }
    }
  }
}
