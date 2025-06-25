import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageComponent } from "../components/exercice-1/page/page.component";
import { CommonModule } from '@angular/common';
import { ComposantAComponent } from '../components/exercice-5/composant-a/composant-a.component';
import { ComposantCComponent } from '../components/exercice-5/composant-c/composant-c.component';
import { ComposantBComponent } from '../components/exercice-5/composant-b/composant-b.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormComponent } from "../components/exercice-8/contact-form/contact-form.component";
import { ContactFormBuilderComponent } from "../components/exercice-8/contact-form-builder/contact-form-builder.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, ContactFormComponent, ReactiveFormsModule, ContactFormBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formation-angular';

  counter = signal(0);
  computedSignal = computed(() => {
    return this.counter() * this.counter()
  })

  receiveMessage = ''

  string = 'Jean'

  userName = 'Clément'

  currentAge = signal<number>(18)

  items = ["Produit","Item"]

  selectedComponent = PageComponent;

  ComposantA = ComposantAComponent;
  ComposantB = ComposantBComponent;
  ComposantC = ComposantCComponent;

  selected = this.ComposantA;

  condition = false

  conditionChiffre = 2222

  // nom: string = '';
  // email: string = '';
  genre: string = '';
  pays: string = '';

  formulaire: FormGroup;

  userId = 1;

  init = () => {
    console.log(this.counter());

    this.counter.set(2);

    console.log(this.counter())

  }

  constructor(private formBuilder: FormBuilder) {
    this.formulaire = this.formBuilder.group(
      {
        nom: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]]
      }
    )
  }

  increment = () => {
    this.counter.set(this.counter() + 1);
  }

  receiveData(message : string){
    this.receiveMessage = message;
  }

  incrementAge = () => this.currentAge.set(this.currentAge()+1)

  onSubmit(){
    if(this.formulaire.valid){
      console.log(this.formulaire.value)
    }
    else {
      console.log('invalide')
    }
  }

}
