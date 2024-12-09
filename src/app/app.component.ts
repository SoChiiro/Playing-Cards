import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Creature } from './models/creature.models';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CreatureType } from './utils/creature.utils';
import { CommonModule } from '@angular/common';
import { CreaturesService } from './services/creatures/creatures.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: `./app.component.scss`,
  imports: [CommonModule,PlayingCardComponent, SearchBarComponent]
})
export class AppComponent {

  creature = signal<Creature[]>([]);
  creatureService = inject(CreaturesService);

  // Search bar
  search = model('');
  filteredCreatures = computed( () => {
    return this.creature().filter(creature => creature.name.includes(this.search()))
  })

  // Signal
  // selectedCreatureIndex = signal(1);
  // selectedCreature = computed( () => {
  //   return this.creature[this.selectedCreatureIndex()]
  // })

  constructor(
    // private creatureService : CreaturesService
  ){
    this.creature.set(this.creatureService.getAll());

  }

  addCreature() {
    const genericCreature = new Creature();
    this.creatureService.add(genericCreature);
    this.creature.set(this.creatureService.getAll());
  }


}
