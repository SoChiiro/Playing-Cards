import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreatureType } from '../../utils/creature.utils';
import { PlayingCardComponent } from "../../components/playing-card/playing-card.component";
import { Creature } from '../../models/creature.models';
import { CreaturesService } from '../../services/creatures/creatures.service';

@Component({
  selector: 'app-creatures',
  imports: [ReactiveFormsModule, PlayingCardComponent],
  templateUrl: './creatures.component.html',
  styleUrl: './creatures.component.scss'
})
export class CreaturesComponent implements OnInit, OnDestroy{
  private route = inject(ActivatedRoute);
  private router = inject(Router); // naviguer entre les différentes pages
  private fb = inject(FormBuilder);
  private creatureService = inject(CreaturesService);

  private routeSubscription : Subscription | any = null;
  private formValueSubscription : Subscription | null = null;

  //  Variable pour le form
  // name = new FormControl('',[Validators.required]);
  // color = new FormControl('',[Validators.required]);

  formGroup = this.fb.group({
    name : ['',[Validators.required]],
    type : [CreatureType.COLORLESS,[Validators.required]],
    image : ['',[Validators.required]],
    capacity : ['Célérité',[Validators.required]],
    figureCaption : ['Créature Légendaire :',[Validators.required]],
    stats : ['1/1',[Validators.required]],
  })

  color: any;
  creature: Creature = Object.assign(new Creature(), this.formGroup.value);
  creatureTypes = Object.values(CreatureType);
  creatureId = -1

  ngOnInit(): void {
    this.formValueSubscription = this.formGroup.valueChanges.subscribe(data => { // regarde à chaque changement du formulaire
      this.creature = Object.assign(new Creature(), data);
    })

    this.routeSubscription = this.route.params.subscribe( params => { // Avec un subscribe il faut unsubscribe
      if (params['creature']) {
        this.creatureId = parseInt(params['creature']); // Utilisez set() pour mettre à jour la signal
        const creatureFound =this.creatureService.get(this.creatureId)
        if(creatureFound) {
          this.creature = creatureFound;
          // this.formGroup.patchValue(this.creature);
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.formValueSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }
  
  next() {
    let nextId = this.creatureId || 0;
    nextId++;
    this.router.navigate(['/creature/' + nextId]);
  }
  
  navigateBack() {
    this.router.navigate(['/home']);
  }

  submit(event : Event) {
    event.preventDefault();
    if(this.creatureId === -1){
      this.creatureService.add(this.creature);
    } else {
      this.creature.id = this.creatureId;
      this.creatureService.update(this.creature);
    }
    this.navigateBack();
  }

  isFieldValid(name : string) {
    const formControl = this.formGroup.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched) 
  }

  onFileChange(event : any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string
        })
      }
    };
  }


  // Exemple of set
  // setChanged() {
  //   this.name.setValue('Changed')
  // }
}
