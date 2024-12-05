import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Creature } from './models/creature.models';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: `./app.component.scss`,
  imports: [PlayingCardComponent]
})
export class AppComponent {
  creature1! : Creature;

  constructor(){
    this.creature1 = new Creature();
    this.creature1.name = "Jon Irenicus"
    this.creature1.figureCaption = "Créature légendaire : elfe et sorcier"
    this.creature1.capacity = `Au début de votre étape de fin, un adversaire ciblé acquiert le contrôle de jusqu'à une créature ciblée que vous 
    contrôlez. Mettez deux marqueurs +1/+1 sur elle et engagez-la. Elle est incitée pour le reste de la partie et elle acquiert « Cette créature 
    ne peut pas être sacrifiée. » (Elle attaque à chaque combat si possible et attaque un joueur autre que vous si possible.)
    À chaque fois qu'une créature que vous possédez, mais que vous ne contrôlez pas attaque, vous piochez une carte.`
    this.creature1.stats = "3/3"
  }
}
