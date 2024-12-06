import { Component, input, InputSignal } from '@angular/core';
import { Creature } from '../../models/creature.models';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {

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
  creature : InputSignal<Creature> = input(new Creature());

  //  Avec les alias et les transforms
  // creature : InputSignal<Creature> = input(new Creature(), {
  //   alias : "my-creature",
  //   transform : (value : Creature) => {
  //     value.name = "Hello"
  //     return value
  //   }
  // })


}
