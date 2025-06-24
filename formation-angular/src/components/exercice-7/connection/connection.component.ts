import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-connection',
  imports: [],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {

  isLoggedIn = signal(false)

  inverseLogin(){
    this.isLoggedIn.update(value => !value)
  }

}
