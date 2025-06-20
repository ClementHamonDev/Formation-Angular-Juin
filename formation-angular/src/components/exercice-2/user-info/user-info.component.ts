import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {

  name = signal('Louis')
  age = signal(19)

  isAdult = computed( ( ) => this.age() >= 18)

  constructor(){
    effect( () => {
      console.log(`Nom : ${this.name()}, age : ${this.age()}`)
    })

    effect( () => {
      if(!this.isAdult()) {
        console.error(`Mon user est mineur, age : ${this.age()}`)
      }
    })
  }

}
