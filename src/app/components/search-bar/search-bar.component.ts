import { Component, EventEmitter, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  
  search = model<string>('Searching');
  searchButtonClicked = output({ alias : 'submit'})

  searchClick() {
    this.searchButtonClicked.emit();
  }

  // Utilisation des inputs
  // @Input() search = 'Searching';

  // Nouvelle façon d'écrire pour être plus rapide
  // searchChange = output<string>();

  // Utilisation des Outputs
  // @Output() searchChange = new EventEmitter<string>()
  
  // Utilisation d'alias pour retrouver l'event output
  // @Output('submit') searchButtonClicker = new EventEmitter()

  // updateSeach(value : string) {
  //   this.searchChange.emit(value);
  // }
}
