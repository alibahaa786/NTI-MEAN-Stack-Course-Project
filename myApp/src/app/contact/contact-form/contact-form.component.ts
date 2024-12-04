import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    msg: new FormControl('')
  })

  onSubmit() {
  }
}
