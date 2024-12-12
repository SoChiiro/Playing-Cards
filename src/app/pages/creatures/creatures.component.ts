import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creatures',
  imports: [],
  templateUrl: './creatures.component.html',
  styleUrl: './creatures.component.scss'
})
export class CreaturesComponent implements OnInit, OnDestroy{
  private route = inject(ActivatedRoute);
  private router = inject(Router); // naviguer entre les différentes pages

  creatureId = signal<number | undefined>(undefined);
  routeSubscription : Subscription | any = null;

  ngOnInit(): void {
      this.routeSubscription = this.route.params.subscribe( params => { // Avec un subscribe il faut unsubscribe
        this.creatureId.set(params['id'] ? parseInt(params['id']) : undefined);
      })
  }

  ngOnDestroy(): void {
      this.routeSubscription?.unsubcribe();
  }

  next() {
    let nextId = this.creatureId() || 0;
    nextId++;
    this.router.navigate(['/creature/' + nextId]);
  }
}
