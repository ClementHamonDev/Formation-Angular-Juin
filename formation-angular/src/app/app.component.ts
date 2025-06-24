import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from "../components/exercice-1/page/page.component";
import { CommonModule } from '@angular/common';
import { ComposantAComponent } from '../components/exercice-5/composant-a/composant-a.component';
import { ComposantCComponent } from '../components/exercice-5/composant-c/composant-c.component';
import { ComposantBComponent } from '../components/exercice-5/composant-b/composant-b.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from "../components/exercice-8/contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, ContactFormComponent],
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

  nom: string = '';
  email: string = '';
  genre: string = '';
  pays: string = '';

  init = () => {
    console.log(this.counter());

    this.counter.set(2);

    console.log(this.counter())

  }

  constructor() {
    this.init();
    effect(() => {
      console.log(this.counter() - 1)
    })
  }

  increment = () => {
    this.counter.set(this.counter() + 1);
  }

  receiveData(message : string){
    this.receiveMessage = message;
  }

  incrementAge = () => this.currentAge.set(this.currentAge()+1)

  onSubmit(){
    console.log('Formulaire soumis', this.nom, this.email, this.genre, this.pays)
  }

}
