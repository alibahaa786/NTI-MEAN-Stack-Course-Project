import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {
  constructor(private _cart:CartService){}
  @Input() product!: Product;
  addItem(product:Product) {
    this._cart.totalPrice += product.price;
    product.quantity++;
    this._cart.increaseCart(1);
    this._cart.updateCart();
  }
  minusItem(product:Product) {
    this._cart.totalPrice -= product.price;
    product.quantity--;
    this._cart.decreaseCart(1);
    this._cart.updateCart();
  }
}
