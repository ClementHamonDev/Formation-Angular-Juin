import { Component, input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-order-status',
  imports: [],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {

  status = input<string>();
  oldStatus: string | undefined;

  ngOnChanges(changes: SimpleChanges): void{
    if(changes['status']){
      this.oldStatus = changes['status'].previousValue
    }
  }

}
