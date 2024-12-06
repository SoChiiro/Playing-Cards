import { Component, computed, Input, input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Creature } from '../../models/creature.models';
import { creatureTypeProperties } from '../../utils/creature.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})

export class PlayingCardComponent {

  // Input traditionel
  // @Input() creature = new Creature();

  creature = input(new Creature());
  creatureTypeIcon = computed(() => {
    return creatureTypeProperties [this.creature().type].icon
  })
  backgroundColor = computed(() => {
    return creatureTypeProperties [this.creature().type].color
  })
  creatureCommanderImage = computed(() => {
    return creatureTypeProperties [this.creature().type].imageURL
  })

  // constructor() {
  //   this.creatureTypeIcon = creatureTypeProperties[this.creature.type].imageURL
  //   this.creatureTypeIcon = creatureTypeProperties[this.creature.type].color
  //   this.creatureTypeIcon = creatureTypeProperties[this.creature.type].icon
  // }

  //  utilisation de  NG On Changes
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['creature']) {
  //     if ( changes['creature'].previousValue?.type != changes['creature'].currentValue.type) {
  //       this.creatureTypeIcon = creatureTypeProperties[this.creature().type].imageURL
  //       this.backgroundColor = creatureTypeProperties[this.creature().type].color
  //       this.creatureTypeIcon = creatureTypeProperties[this.creature().type].icon
  //     }
  //   }
  // }

  // Input avec type
  // creature : InputSignal<Creature> = input(new Creature());


  //  Exemple d'input
  // @Input({
  //   required: true,
  //   alias: "my-creature",
  //   transform : (value : Creature) => {
  //     value.name = "Hello"
  //     return value;
  //   }
  // }) 
  
  // Signal input
  // creature : InputSignal<Creature> = input.required();

  //  Avec les alias et les transforms
  // creature : InputSignal<Creature> = input(new Creature(), {
  //   alias : "my-creature",
  //   transform : (value : Creature) => {
  //     value.name = "Hello"
  //     return value
  //   }
  // })


}
