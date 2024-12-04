import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {
  totalPrice!: number;
  constructor(private _cart: CartService) { }
  ngOnInit(): void {
    this._cart.cartProducts.subscribe(() => this.totalPrice = this._cart.totalPrice)
  }
}
