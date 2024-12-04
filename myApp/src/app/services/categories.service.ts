import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries"
  ]

  getCategories(){
    return this.categories;
  }
  constructor() { }
}
