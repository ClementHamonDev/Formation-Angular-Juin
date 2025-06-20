import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  firstName = input<string>()
  lastName = input.required<string>()
  age = input<number>(0)

}
