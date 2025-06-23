import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  items = input.required<string[]>();

}
