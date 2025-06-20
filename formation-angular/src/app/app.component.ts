import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PremierComponentComponent } from "../components/premier-component/premier-component.component";
import { HelloWorldComponent } from "../components/exercice-1/hello-world/hello-world.component";
import { WelcomeComponent } from '../components/exercice-1/welcome/welcome.component';
import { PageComponent } from "../components/exercice-1/page/page.component";
import { WelcomeWithNameComponent } from "../components/exercice-2/welcome-with-name/welcome-with-name.component";
import { UserInfoComponent } from "../components/exercice-2/user-info/user-info.component";
import { UserProfileComponent } from "../components/exercice-2/user-profile/user-profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PremierComponentComponent, HelloWorldComponent, WelcomeComponent, PageComponent, WelcomeWithNameComponent, UserInfoComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formation-angular';

  counter = signal(0);
  computedSignal = computed(() => {
    return this.counter() * this.counter()
  })

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

}
