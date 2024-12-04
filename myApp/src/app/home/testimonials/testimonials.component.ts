import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../models/Testimonial';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  isActive: number = 0;
  isInactive: boolean = false;
  myTestimonials!: Testimonial[];
  myTestLength!: number;
  
  constructor(private _testimonial: TestimonialsService) { }
  
  ngOnInit(): void {
    this.myTestimonials = this._testimonial.getTest();
    this.myTestLength = this._testimonial.getTestLength();
  }

  next(i:number) {
    this.isActive = (this.isActive + 1) % this.myTestLength;
  }

  back(i:number) {
    if (!this.isActive) {
      this.isActive = this.myTestLength;
    }
    this.isActive = (this.isActive - 1) % this.myTestLength;
  }
}
