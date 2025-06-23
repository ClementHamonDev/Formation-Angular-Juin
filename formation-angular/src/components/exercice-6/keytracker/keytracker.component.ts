import { Component } from '@angular/core';

@Component({
  selector: 'app-keytracker',
  imports: [],
  templateUrl: './keytracker.component.html',
  styleUrl: './keytracker.component.css'
})
export class KeytrackerComponent {

  handleKeyDown(event: KeyboardEvent){
    console.log(`Touche enfoncée: ,${event.key}`)
  }

  handleKeyUp(event: KeyboardEvent){
    console.log(`Touche relachée: ,${event.key}`)
  }

}
