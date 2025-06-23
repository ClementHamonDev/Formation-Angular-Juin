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

  email = model<string>('');

  list = ["a","b","c"]

  filteredList = this.list.filter(item => item.startsWith("a"))


  sendString(){
    this.stringEvent.emit('Message')
  }

  sendNumber(){
    this.numberEvent.emit(123)
  }

  sendBoolean(){
    this.booleanEvent.emit(true)
  }

  handleInput(newEmail : Event){
    const newValue = (newEmail.target as HTMLInputElement).value;
    this.email.set(newValue)
  }

}
