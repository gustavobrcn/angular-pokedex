import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor() {}

  ngOnInit(): void {}

  addStyle = (typeColor: string): Object => {
    if (typeColor === '#FFFA24' || typeColor === '#BDDD6E') {
      return {
        color: this.pokemon.getTypeColor(),
        'text-shadow':
          '2px 0 0 #000, 0 -1px 0 #000, 0 2px 0 #000, -1px 0 0 #000',
      };
    } else {
      return {
        color: this.pokemon.getTypeColor(),
        'text-shadow':
          '1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff',
      };
    }
  };
}
