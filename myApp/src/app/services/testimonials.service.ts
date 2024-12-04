import { Injectable } from '@angular/core';
import { Testimonial } from '../models/Testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonialData: Testimonial[] = [
    {
      name: "Maria Jones",
      role: "CEO, Co-Founder, XYZ Inc.",
      img: "./brand_logo.jpg",
      review: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
    },
    {
      name: "Ali Bahaa",
      role: "CEO, Co-Founder, XYZ Inc.",
      img: "./brand_logo.jpg",
      review: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
    },
    {
      name: "Gerges Zerges",
      role: "CEO, Co-Founder, XYZ Inc.",
      img: "./brand_logo.jpg",
      review: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
    },
    {
      name: "Safwat Zerges",
      role: "CEO, Co-Founder, XYZ Inc.",
      img: "./brand_logo.jpg",
      review: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
    },
    {
      name: "asdgfasf",
      role: "CEO, Co-Founder, XYZ Inc.",
      img: "./brand_logo.jpg",
      review: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."
    }
  ]

  getTest() {
    return this.testimonialData;
  }

  getTestLength() {
    return this.testimonialData.length;
  }
  constructor() { }
}
