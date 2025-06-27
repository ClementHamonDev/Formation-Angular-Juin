import { Component, input } from '@angular/core';

@Component({
  selector: 'app-filtered-item-list',
  imports: [],
  templateUrl: './filtered-item-list.component.html',
  styleUrl: './filtered-item-list.component.css'
})
export class FilteredItemListComponent {

  items = input<string[]>([]); 
  query = input<string>('')

  ngOnInit() {

    this.items().filter(item => {
      var q = item.toLowerCase();
      return q.includes(this.query());
    })
  }
}
