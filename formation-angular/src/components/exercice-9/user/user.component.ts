import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userId :string | null;

  constructor(private route : ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
