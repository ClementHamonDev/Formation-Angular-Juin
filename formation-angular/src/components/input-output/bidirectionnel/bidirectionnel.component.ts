import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-bidirectionnel',
  imports: [],
  templateUrl: './bidirectionnel.component.html',
  styleUrl: './bidirectionnel.component.css'
})
export class BidirectionnelComponent {

  name = input<string>()
  nameChange = output<string>()

  age = model(18)

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.nameChange.emit(newValue)
  }

  incrementAge = () => this.age.set(this.age() + 1)


}
