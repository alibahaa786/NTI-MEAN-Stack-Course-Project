import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent{
  @Input() product !: Product;
  @Output() saveProduct = new EventEmitter<Product>;
  // ngOnInit(): void {
  //   this.newProduct = this.product;
  // }

  save(){
    this.saveProduct.emit(this.product);
  }

  // title: string,
  // description: string,
  // category: string,
  // price: number,
  // rating: number,
  // stock: number,
  // brand: string,
  // images: string[]
}
