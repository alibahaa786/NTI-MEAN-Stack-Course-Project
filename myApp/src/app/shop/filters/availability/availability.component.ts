import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css'
})
export class AvailabilityComponent {
  inStock = false;
  outOfStock = false;
  @Output() avaChange = new EventEmitter<boolean[]>;
  stockChange() {
    this.avaChange.emit([this.inStock, this.outOfStock]);
  }
}
