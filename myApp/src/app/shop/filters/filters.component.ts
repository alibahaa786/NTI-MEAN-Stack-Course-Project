import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { FilterForm } from '../../models/FilterForm';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  constructor(private _api:ApiService, private _productData: ProductDataService){}

  isActivePrice = false;
  isActiveCat = false;
  isActiveAva = false;
  @Input() sortBy !: string;

  filterForm: FilterForm = {
    minPrice: 0,
    maxPrice: 0,
    categories: [],
    availability: {
      inStock: false,
      outOfStock: false
    },
    sortBy: "best"
  }

  //Form Functions
  updatePrice(price: number[]) {
    this.filterForm.minPrice = price[0];
    this.filterForm.maxPrice = price[1];
  }
  updateCat(categories: string[]) {
    this.filterForm.categories = categories;
  }
  updateAva(ava: boolean[]) {
    this.filterForm.availability.inStock = ava[0];
    this.filterForm.availability.outOfStock = ava[1];
  }
  applyFilters() {
    this.filterForm.sortBy = this.sortBy;
    this._api.applyFilters(this.filterForm).subscribe(
      (filteredProducts) => this._productData.updateFilteredProducts(filteredProducts) 
    );
  }
  
  //Dropdown functions
  dropdownPrice() {
    this.isActivePrice = !this.isActivePrice;
    return this.isActivePrice;
  }
  dropdownCat() {
    this.isActiveCat = !this.isActiveCat;
    return this.isActiveCat;
  }
  dropdownAva() {
    this.isActiveAva = !this.isActiveAva;
    return this.isActiveAva;
  }
}
