import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-role-switch',
  imports: [],
  templateUrl: './role-switch.component.html',
  styleUrl: './role-switch.component.css'
})
export class RoleSwitchComponent {

  role = signal('user')

}
