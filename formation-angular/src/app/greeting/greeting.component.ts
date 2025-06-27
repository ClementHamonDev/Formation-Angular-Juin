import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h2>Bienvenue, {{ name()}} !</h2>`
})
export class GreetingComponent {
  name = input<string>('');
}
