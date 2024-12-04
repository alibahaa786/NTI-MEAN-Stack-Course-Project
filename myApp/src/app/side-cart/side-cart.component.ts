import { Component, OnInit } from '@angular/core';
import { ToggleCartService } from '../services/toggle-cart.service';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductDataService } from '../services/product-data.service';
import { Router } from '@angular/router';
import { ToggleActiveNavService } from '../services/toggle-active-nav.service';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrl: './side-cart.component.css'
})
export class SideCartComponent implements OnInit {
  activeCart!: boolean;
  productsDisplayed!: Product[];
  totalProducts!: Product[];
  totalPrice!: number;
  productId!: number;
  constructor(private _activeTab: ToggleActiveNavService, private _activeCart: ToggleCartService, private _cart: CartService, private _products: ProductDataService, private _router: Router) { }
  ngOnInit(): void {
    this._activeCart.activeCart.subscribe(
      (active) => this.activeCart = active
    );
    this._cart.cartProducts.subscribe((products) => {
      this.productsDisplayed = [...products];
      this.totalPrice = this._cart.totalPrice;
      // console.log("Products: ", this.productsDisplayed);
    });
    // this.totalProducts = this._products.getProduct();
    this._products.products.subscribe(
      (products) => {
        this.totalProducts = products;
      }
    )
  }
  showCart() {
    this._activeCart.changeActive(!this.activeCart);
  }
  removeItem(product: Product) {
    this._cart.totalPrice -= (product.price * product.quantity);
    this.productId = product.id - 1;
    this._cart.decreaseCart(this.totalProducts[this.productId].quantity);
    this.totalProducts[this.productId].quantity = 0;
    this._cart.updateCart();
  }
  goToCheckout() {
    this._router.navigate(['/your_cart']);
    this._activeTab.changeTab('cart');
    this.showCart();
  }
  continueShop() {
    this._router.navigate(['/shop']);
    this._activeTab.changeTab('shop');
    this.showCart();
  }
}
