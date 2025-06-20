import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {

  message = input<string>()
  numeric = input<number>()
  boolean = input<boolean>()

  stringEvent = output<string>()
  numberEvent = output<number>()
  booleanEvent = output<boolean>()

  email = input<string>('')
  emailChange = output<string>()

  sendString() {
    this.stringEvent.emit('Message')
  }

  sendNumber() {
    this.numberEvent.emit(123)
  }

  sendBoolean() {
    this.booleanEvent.emit(true)
  }

  handleInput(newEmail: Event) {
    const newValue = (event!.target as HTMLInputElement).value;
    this.emailChange.emit(newValue)
  }
}
