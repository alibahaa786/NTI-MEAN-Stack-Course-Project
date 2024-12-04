import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  sortByValue: string = "best";
  @Output() sortChange = new EventEmitter<string>;
  updateSort(){
    this.sortChange.emit(this.sortByValue);
  }
}
