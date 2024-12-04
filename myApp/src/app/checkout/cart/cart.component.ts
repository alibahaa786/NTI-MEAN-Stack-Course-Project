import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ToggleActiveNavService } from '../../services/toggle-active-nav.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  myProducts!: Product[]
  constructor(private _products:CartService, private _nav:ToggleActiveNavService){}
  ngOnInit(): void {
    this._products.cartProducts.subscribe((products) => this.myProducts = products);
  }

  changeTab(tab:string){
    this._nav.changeTab(tab);
  }
}
