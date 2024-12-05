import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: `./app.component.scss`,
  imports: [PlayingCardComponent]
})
export class AppComponent {

}
