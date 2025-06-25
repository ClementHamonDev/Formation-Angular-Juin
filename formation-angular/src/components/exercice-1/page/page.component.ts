import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [TitleComponent, WelcomeComponent, RouterOutlet],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
