import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Creature } from './models/creature.models';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CreatureType } from './utils/creature.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: `./app.component.scss`,
  imports: [PlayingCardComponent, SearchBarComponent]
})
export class AppComponent {
  creature! : Creature[];
  count : number = 0;
  search = '';

  // selectedCreatureIndex : number = 0
  selectedCreatureIndex = signal(1);
  selectedCreature = computed( () => {
    return this.creature[this.selectedCreatureIndex()]
  })

  constructor(){

    effect( () => {
      console.log(this.selectedCreature())
    })

    this.creature = []
    const creature1 = new Creature();

    // this.creature1 = new Creature();
    creature1.name = "Imodane"
    creature1.image = "/img/Imodane.webp";
    creature1.type = CreatureType.RED;
    creature1.figureCaption = "Créature légendaire : elfe et sorcier"
    creature1.capacity = `Au début de votre étape de fin, un adversaire ciblé acquiert le contrôle de jusqu'à une créature ciblée que vous 
    contrôlez. Mettez deux marqueurs +1/+1 sur elle et engagez-la. Elle est incitée pour le reste de la partie et elle acquiert « Cette créature 
    ne peut pas être sacrifiée. » (Elle attaque à chaque combat si possible et attaque un joueur autre que vous si possible.)
    À chaque fois qu'une créature que vous possédez, mais que vous ne contrôlez pas attaque, vous piochez une carte.`
    creature1.stats = "4/4"
    this.creature.push(creature1);

    const creature2 = new Creature();
    creature2.name = "Hullbreaker";
    creature2.image = "/img/horror.avif";
    creature2.type = CreatureType.BLUE;
    creature2.figureCaption = "Créature Légendaire : Humain et Ninja";
    creature2.capacity = `À chaque fois que vous activez une capacité de ninjutsu, regardez les trois cartes du dessus de votre 
                    bibliothèque. Mettez l'une d'elles dans votre main et le reste au-dessous de votre bibliothèque, dans l'ordre de votre choix. 
                    Cette capacité ne se déclenche qu'une seule fois par tour.`
    creature2.stats = "2/4";
    this.creature.push(creature2)

    const creature3 = new Creature();
    creature3.name = "Aragorn";
    creature3.image = "/img/aragorn.jpg";
    creature3.type = CreatureType.MULTI;
    creature3.figureCaption = "Créature Légendaire : Humain ";
    creature3.capacity = `La meilleure carte de monde so far`
    creature3.stats = "5/5";
    this.creature.push(creature3)
  }

  increaseCount() {
    this.count++;
  }

  toggleCommander(){
    this.selectedCreatureIndex.set((this.selectedCreatureIndex() + 1) % this.creature.length);
  }

}
