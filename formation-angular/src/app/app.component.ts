import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageComponent } from "../components/exercice-1/page/page.component";
import { CommonModule } from '@angular/common';
import { ComposantAComponent } from '../components/exercice-5/composant-a/composant-a.component';
import { ComposantCComponent } from '../components/exercice-5/composant-c/composant-c.component';
import { ComposantBComponent } from '../components/exercice-5/composant-b/composant-b.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormComponent } from "../components/exercice-8/contact-form/contact-form.component";
import { ContactFormBuilderComponent } from "../components/exercice-8/contact-form-builder/contact-form-builder.component";
import { StockDisplayComponent } from "../components/exercice-10/stock-display/stock-display.component";
import { OrderStatusComponent } from "../components/exercice-10/order-status/order-status.component";
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterReducer } from '../store/counter/counter.reducer';
import { decrement, increment, reset, incrementBy } from '../store/counter/counter.action';
import { CounterComponent } from "./counter/counter.component";
import { GreetingComponent } from "./greeting/greeting.component";

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, ContactFormComponent, ReactiveFormsModule, ContactFormBuilderComponent, StockDisplayComponent, OrderStatusComponent, StoreModule, CounterComponent, GreetingComponent],
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

  ngOnInit(): void {
    this.user = {
      name: 'Clément',
      age: 50,
      address: 'adresse'
    }
  }

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
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
