import { Component, signal } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {

  receivedString = 'A';
  receivedNumber = 0;
  receivedBoolean = false;

  email = 'exemple@gmail.com'

  handleString(value : string){
    this.receivedString = value
  }

  handleNumber (value: number){
    this.receivedNumber = value
  }

  handleBoolean(value:boolean){
    this.receivedBoolean = value;
  }

}
