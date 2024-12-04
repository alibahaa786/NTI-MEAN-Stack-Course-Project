import { Component, Input} from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private _cart:CartService, private _productsData: ProductDataService){}
  @Input() product!:Product;
  addToCart(product:Product) {
    this._cart.totalPrice += product.price;
    this._productsData.updateQuantity(product);
    this._cart.increaseCart(1);
    this._cart.updateCart();
  }
}
