import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/Product';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  emptyProduct!: Product;
  isAdding = false;

  ngOnInit(): void {
    this.emptyProduct = {
      _id: "",
      id: 0,
      title: "",
      description: "",
      category: "",
      price: 0,
      rating: 0,
      stock: 0,
      brand: "",
      images: [],
      thumbnail: "",
      quantity: 0,
    }
  }

  constructor(private _api: ApiService, private _productsData: ProductDataService) { }
  toggleAdd() {
    if (!this.isAdding) {
      this.isAdding = !this.isAdding;
    }
  }
  addProduct(product: Product) {
    this._api.addProduct(product).subscribe({
      next: (res) => {
        this._productsData.initializeProducts();
        this.isAdding = !this.isAdding;
      },
      error: err => console.log(err)
    })
  }
}
