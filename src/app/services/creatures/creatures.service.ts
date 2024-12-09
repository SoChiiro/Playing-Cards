import { Injectable } from '@angular/core';
import { Creature } from '../../models/creature.models';
import { CreatureType } from '../../utils/creature.utils';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {
  
  creatures : Creature[] = [];
  currentIndex : number = 1;

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('creatures', JSON.stringify(this.creatures));
  }

  private load() {
    const creatureData = localStorage.getItem('creatures');
    
    if ( creatureData ) {
      this.creatures = JSON.parse(creatureData).map((creatureJson : any ) => Object.assign(new Creature(), creatureJson));
      this.currentIndex = Math.max(...this.creatures.map(creature => creature.id)); //... permet d'avoir les valeurs en question
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    this.creatures = []
    const creature1 = new Creature();

    // this.creature1 = new Creature();
    creature1.name = "Imodane"
    creature1.image = "/img/Imodane.webp";
    creature1.type = CreatureType.RED;
    creature1.figureCaption = "Créature légendaire : humain et chevalier"
    creature1.capacity = `À chaque fois qu'un sort d'éphémère ou de rituel que vous contrôlez qui ne cible qu'une créature inflige des blessures 
                          à cette créature, Imodane inflige autant blessures à chaque adversaire.`
    creature1.stats = "4/4"
    this.creatures.push(creature1);

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
    this.creatures.push(creature2)

    const creature3 = new Creature();
    creature3.name = "Ghalta";
    creature3.image = "/img/Ghalta.webp";
    creature3.type = CreatureType.GREEN;
    creature3.figureCaption = "Créature Légendaire : Dinosaure ";
    creature3.capacity = `Ghalta, Faim primordiale coûte  de moins à lancer, X étant la force totale des créatures que vous contrôlez.
                          Piétinement`;
    creature3.stats = "12/12";
    this.creatures.push(creature3)

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
    this.creatures.push(creature4)
  }

  getAll() : Creature[]{
    return this.creatures.map(creature => creature.copy());
  }

  get(id : number) : Creature | undefined {
      const creature = this.creatures.find( creature => creature.id === id);
      return creature ? creature.copy() : undefined;
  }

  add(creature : Creature) : Creature {
    const creatureCopy = creature.copy();

    creatureCopy.id = this.currentIndex;
    this.creatures.push(creatureCopy.copy()); // On repasse une copie au cas ou l'utilisateur voudrait le modifier
    this.currentIndex++;
    this.save();

    return creatureCopy;
  }

  update(creature : Creature) : Creature {
    const creatureCopy = creature.copy();
    const creatureIndex = this.creatures.findIndex(originalCreature => originalCreature.id === creature.id);

    if(creatureIndex != -1) {
      this.creatures[creatureIndex] = creatureCopy.copy();
      this.save();
    }

    return creatureCopy
  }

  delete(id:number) {
    const creatureIndex = this.creatures.findIndex(originalCreature => originalCreature.id === id);

    if(creatureIndex != -1){
      this.creatures.splice(creatureIndex,1); // permet d'enlever un élément du table à partir de l'index sélectionné +1
      this.save();
    }
  }

}
