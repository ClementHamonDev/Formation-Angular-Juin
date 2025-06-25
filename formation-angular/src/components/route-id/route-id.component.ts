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
  userName: string | null

  constructor(private route: ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userName = this.route.snapshot.paramMap.get('name');

    this.route.params.subscribe(params => {
      this.userId = params['id']
      this.userId = params['name']
    })
  }

}
