import { CreatureType } from "../utils/creature.utils";

export class Creature {

  id: number = -1;
  name : String = "Satoru Umezawa";
  image: string = "/img/Satoru_Umezawa.webp";
  type: CreatureType = CreatureType.MULTI ;
  figureCaption : String = "Créature Légendaire : Humain et Ninja";
  capacity : String = `À chaque fois que vous activez une capacité de ninjutsu, regardez les trois cartes du dessus de votre 
                    bibliothèque. Mettez l'une d'elles dans votre main et le reste au-dessous de votre bibliothèque, dans l'ordre de votre choix. 
                    Cette capacité ne se déclenche qu'une seule fois par tour.`;
  stats : String = "2/4";

  copy() : Creature {
      return Object.assign(new Creature(), this); // Permet de prendre un objet et lui assigner tous les paramètres
  }
}