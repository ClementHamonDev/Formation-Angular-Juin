import { Component } from '@angular/core';

@Component({
  selector: 'app-hoverbox',
  imports: [],
  templateUrl: './hoverbox.component.html',
  styleUrl: './hoverbox.component.css'
})
export class HoverboxComponent {

  colorVar = 'red'

  setColor (newColor : string){
    this.colorVar = newColor;
  }

}
