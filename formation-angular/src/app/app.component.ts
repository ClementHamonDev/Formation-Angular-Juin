import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PremierComponentComponent } from "../components/premier-component/premier-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PremierComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formation-angular';
}
