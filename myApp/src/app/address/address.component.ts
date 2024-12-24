import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  selectedCountry = 'egypt'
}
