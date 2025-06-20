import { Component, input, output } from '@angular/core';

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


  sendString(){
    this.stringEvent.emit('Message')
  }

  sendNumber(){
    this.numberEvent.emit(123)
  }

  sendBoolean(){
    this.booleanEvent.emit(true)
  }

}
