import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  submitted = false;

  formData = {
    name: '',
    email: '',
    message: '',
    language: ''
  };

  submitForm() {
    this.submitted = true;
    console.log('Formulaire soumis :', this.formData);
  }
}
