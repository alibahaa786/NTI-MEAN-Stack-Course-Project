import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  myCategories! : string[];
  filterCategories: string[] = [];

  @Output() catChange = new EventEmitter<string[]>;

  constructor(private _categories: CategoriesService){}
  ngOnInit(): void {
    this.myCategories = this._categories.getCategories();
  }

  updateCat(category: string, isChecked: boolean){
    if (isChecked){
      this.filterCategories[this.filterCategories.length] = category
    } else {
      this.filterCategories = this.filterCategories.filter(cat => cat !== category);
    }
  this.catChange.emit(this.filterCategories);
  }
}
