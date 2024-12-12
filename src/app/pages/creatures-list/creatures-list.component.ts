import { Component, computed, inject, model, signal } from '@angular/core';
import { CreaturesService } from '../../services/creatures/creatures.service';
import { Creature } from '../../models/creature.models';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from "../../components/playing-card/playing-card.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
  selector: 'app-creatures-list',
  imports: [CommonModule , PlayingCardComponent, SearchBarComponent],
  templateUrl: './creatures-list.component.html',
  styleUrl: './creatures-list.component.scss'
})
export class CreaturesListComponent {
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
