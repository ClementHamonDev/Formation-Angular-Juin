import { Component, output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  nameChange = output<string>()

  sendData() {
    this.nameChange.emit('Message de l`enfant')
  }

}
