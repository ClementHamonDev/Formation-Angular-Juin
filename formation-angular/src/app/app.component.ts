import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageComponent } from "../components/exercice-1/page/page.component";
import { CommonModule } from '@angular/common';
import { ComposantAComponent } from '../components/exercice-5/composant-a/composant-a.component';
import { ComposantCComponent } from '../components/exercice-5/composant-c/composant-c.component';
import { ComposantBComponent } from '../components/exercice-5/composant-b/composant-b.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset, incrementBy } from '../store/counter/counter.action';
import { GreetingComponent } from "./greeting/greeting.component";
import { HighlightDirective } from './directives/highlight.directive';
import { ChangeColorDirective } from './directives/change-color.directive';
import { HideElementDirective } from './directives/hide-element.directive';
import { BorderDirective } from './directives/border.directive';
import { ApiService } from './services/api.service';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, StoreModule, GreetingComponent, HighlightDirective, ChangeColorDirective, HideElementDirective, BorderDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'formation-angular';

  counter = signal(0);
  computedSignal = computed(() => {
    return this.counter() * this.counter()
  })

  receiveMessage = ''

  string = 'Jean'

  userName = 'Clément'

  currentAge = signal<number>(18)

  items = ["Produit", "Item"]

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

  userId = 1;

  user: { name: string; age: number; address: string; } | undefined;

  users: any[] = []

  ngOnInit(): void {
    this.user = {
      name: 'Clément',
      age: 50,
      address: 'adresse'
    }

    this.api.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (e) => console.error('Erreur lors de la récupération', e),
      complete: () => console.log('Recupération finie')
    })
  }

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>, private api : ApiService) {
    this.count$ = store.select('count');
  }

  increaseButton() {
    this.store.dispatch(increment())
  }

  decreaseButton() {
    this.store.dispatch(decrement())
  }

  resetButton() {
    this.store.dispatch(reset())
  }

  incrementByButton(nombre: number) {
    this.store.dispatch(incrementBy({ nombre }))
  }


  increment = () => {
    this.counter.set(this.counter() + 1);
  }

  decrement = () => {
    this.counter.set(this.counter() - 1);
  }

  reset = () => {
    this.counter.set(0);
  }

  receiveData(message: string) {
    this.receiveMessage = message;
  }

  incrementAge = () => this.currentAge.set(this.currentAge() + 1)


  quantity = signal(0);

  status = signal('')

  add() {
    this.quantity.set(this.quantity() + 1);
  }

  remove() {
    this.quantity.set(this.quantity() - 1);
  }

  changesStatus(newStatus: string) {
    this.status.set(newStatus);
  }

  addNumber(a: number, b: number): number {
    return a + b;
  }

  maj(mot: string): string {
    return mot.toUpperCase();
  }

  filterAndSortUsers(users: User[], minAge: number): User[] {
    return users
      .filter((user: User) => user.age >= minAge)
      .sort((a: User, b: User) => a.name.localeCompare(b.name));
  }

}
