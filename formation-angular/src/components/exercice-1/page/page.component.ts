import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { WelcomeComponent } from "../welcome/welcome.component";

@Component({
  selector: 'app-page',
  imports: [TitleComponent, WelcomeComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
