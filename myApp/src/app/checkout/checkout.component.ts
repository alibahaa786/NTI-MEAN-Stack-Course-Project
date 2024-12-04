import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  myProducts!: Product[]
  constructor(private _products:CartService){}
  ngOnInit(): void {
    this._products.cartProducts.subscribe((products) => this.myProducts = products);
  }
}
