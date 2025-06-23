import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PremierComponentComponent } from "../components/premier-component/premier-component.component";
import { HelloWorldComponent } from "../components/exercice-1/hello-world/hello-world.component";
import { WelcomeComponent } from '../components/exercice-1/welcome/welcome.component';
import { PageComponent } from "../components/exercice-1/page/page.component";
import { WelcomeWithNameComponent } from "../components/exercice-2/welcome-with-name/welcome-with-name.component";
import { UserInfoComponent } from "../components/exercice-2/user-info/user-info.component";
import { UserProfileComponent } from "../components/exercice-2/user-profile/user-profile.component";
import { InputComponent } from "../components/input-output/input/input.component";
import { OutputComponent } from "../components/input-output/output/output.component";
import { BidirectionnelComponent } from "../components/input-output/bidirectionnel/bidirectionnel.component";
import { ParentComponentComponent } from "../components/exercice-3/parent-component/parent-component.component";
import { ItemListComponent } from "../components/exercice-4/item-list/item-list.component";
import { FilteredItemListComponent } from "../components/exercice-4/filtered-item-list/filtered-item-list.component";
import { CommonModule } from '@angular/common';
import { CardComponent } from "../components/exercice-5/card/card.component";
import { TextComponent } from "../components/exercice-5/text/text.component";
import { ComposantAComponent } from '../components/exercice-5/composant-a/composant-a.component';
import { ComposantCComponent } from '../components/exercice-5/composant-c/composant-c.component';
import { ComposantBComponent } from '../components/exercice-5/composant-b/composant-b.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, PremierComponentComponent, HelloWorldComponent, WelcomeComponent, PageComponent, WelcomeWithNameComponent, UserInfoComponent, UserProfileComponent, InputComponent, OutputComponent, BidirectionnelComponent, ParentComponentComponent, ItemListComponent, FilteredItemListComponent, CommonModule, CardComponent, TextComponent],
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

}
