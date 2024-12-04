import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrl: './price-slider.component.css'
})
export class PriceSliderComponent {
  @Output() priceChange = new EventEmitter<[number, number]>();
  minPrice = 1000;
  maxPrice = 5000;
  updatePriceRange(inp: string) {
    if (inp === "min") {
      if (this.minPrice >= this.maxPrice) {
        this.maxPrice = this.minPrice + 1;
      }
    } else if (inp === "max") {
      if (this.minPrice >= this.maxPrice) {
        this.minPrice = this.maxPrice - 1;
      }
    }
    this.priceChange.emit([this.minPrice, this.maxPrice])
  }
}
