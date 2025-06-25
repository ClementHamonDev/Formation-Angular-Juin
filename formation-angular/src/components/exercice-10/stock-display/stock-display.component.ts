import { Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stock-display',
  imports: [],
  templateUrl: './stock-display.component.html',
  styleUrl: './stock-display.component.css'
})
export class StockDisplayComponent {

  quantity = input<number>(0);
  oldQuantity: number | null = null
  status: string = ''

  ngOnChanges(changes: SimpleChanges){
    if(changes['quantity'] ){
      const prev = changes['quantity'].previousValue;
      const current = changes['quantity'].currentValue;
      this.oldQuantity = prev;
      this.status = current > prev ? 'Stock en augmentation' : 'Stock en diminution'
    }
  }

}
