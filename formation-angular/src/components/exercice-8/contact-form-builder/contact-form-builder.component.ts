import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-builder',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form-builder.component.html',
  styleUrl: './contact-form-builder.component.css'
})
export class ContactFormBuilderComponent {
  submitted = false;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      language: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.submitted = true;
      console.log('Formulaire soumis :', this.contactForm.value);
    }
  }
}
