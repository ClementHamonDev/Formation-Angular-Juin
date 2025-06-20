import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  name = signal('Clément')
  age = signal(18)
  email = signal('exemple@gmail.com')
  country = signal('France')
  job = signal('Dev')


  constructor() {
    effect(() => {
      console.log('Profil mis à jour : ', {
        name: this.name(),
        age: this.age(),
        email: this.email(),
        country: this.country(),
        job: this.job(),
      })
    })
  }

  updateName() {
    this.name.set('Louis')
  }

  updateAge() {
    this.age.set(21)
  }

  updateEmail() {
    this.email.set('vraiemail@gmail.com')
  }

  updateCountry() {
    this.country.set('Belgique')
  }

  updateJob() {
    this.job.set('Cadre')
  }

}
