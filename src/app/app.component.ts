import { Component, computed, effect, model, signal } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Creature } from './models/creature.models';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CreatureType } from './utils/creature.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: `./app.component.scss`,
  imports: [CommonModule,PlayingCardComponent, SearchBarComponent]
})
export class AppComponent {
  creature! : Creature[];
  search = model('');

  filteredCreatures = computed( () => {
    return this.creature.filter(creature => creature.name.includes(this.search()))
  })
  // count : number = 0;

  // selectedCreatureIndex : number = 0
  selectedCreatureIndex = signal(1);
  selectedCreature = computed( () => {
    return this.creature[this.selectedCreatureIndex()]
  })

  constructor(){

    this.creature = []
    const creature1 = new Creature();

    // this.creature1 = new Creature();
    creature1.name = "Imodane"
    creature1.image = "/img/Imodane.webp";
    creature1.type = CreatureType.RED;
    creature1.figureCaption = "Créature légendaire : humain et chevalier"
    creature1.capacity = `À chaque fois qu'un sort d'éphémère ou de rituel que vous contrôlez qui ne cible qu'une créature inflige des blessures 
    à cette créature, Imodane inflige autant blessures à chaque adversaire.`
    creature1.stats = "4/4"
    this.creature.push(creature1);

    const creature2 = new Creature();
    creature2.name = "Hullbreaker";
    creature2.image = "/img/horror.avif";
    creature2.type = CreatureType.BLUE;
    creature2.figureCaption = "Créature Légendaire : kraken et horreur";
    creature2.capacity = `Flash
                          Ce sort ne peut pas être contrecarré.
                          À chaque fois que vous lancez un sort, choisissez jusqu'à l'un -
                          • Renvoyez un sort ciblé que vous ne contrôlez pas dans la main de son propriétaire.
                          • Renvoyez un permanent non-terrain ciblé dans la main de son propriétaire`
    creature2.stats = "7/8";
    this.creature.push(creature2)

    const creature3 = new Creature();
    creature3.name = "Ghalta";
    creature3.image = "/img/Ghalta.webp";
    creature3.type = CreatureType.GREEN;
    creature3.figureCaption = "Créature Légendaire : Dinosaure ";
    creature3.capacity = `Ghalta, Faim primordiale coûte  de moins à lancer, X étant la force totale des créatures que vous contrôlez.
Piétinement`;
    creature3.stats = "12/12";
    this.creature.push(creature3)

    const creature4 = new Creature();
    creature4.name = "Aragorn";
    creature4.image = "/img/aragorn.jpg";
    creature4.type = CreatureType.MULTI;
    creature4.figureCaption = "Créature Légendaire : humain et noble ";
    creature4.capacity = `À chaque fois que vous lancez un sort blanc, créez un jeton de créature 1/1 blanche Humain et Soldat.
                          À chaque fois que vous lancez un sort bleu, regard 2.
                          À chaque fois que vous lancez un sort rouge, Aragorn, l'unificateur inflige 3 blessures à un adversaire ciblé.
                          À chaque fois que vous lancez un sort vert, une créature ciblée gagne +4/+4 jusqu'à la fin du tour.`;
    creature4.stats = "5/5";
    this.creature.push(creature4)
  }

  // increaseCount() {
  //   this.count++;
  // }

  // toggleCommander(){
  //   this.selectedCreatureIndex.set((this.selectedCreatureIndex() + 1) % this.creature.length);
  // }

}
