import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-permission',
  imports: [],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.css'
})
export class PermissionComponent {

  isLoggedIn = signal(false)
  hasSubscription = signal(false)
  isAdmin = signal(false)

  toggleAdmin(){
    this.isAdmin.update(value => !value)
  }

  toggleConnexion(){
    this.isLoggedIn.update(value => !value)
  }

  toggleSub(){
    this.hasSubscription.update(value => !value)
  }

}
