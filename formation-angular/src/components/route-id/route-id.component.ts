import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-id',
  imports: [],
  templateUrl: './route-id.component.html',
  styleUrl: './route-id.component.css'
})
export class RouteIdComponent {

  userId: string | null;

  constructor(private route: ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('toto');
  }

}
