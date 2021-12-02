import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  $pokemon = new Observable<Pokemon>();

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    const ranNum = this.getRandomInt(899);
    this.$pokemon = this.pokeService.getPokemon(ranNum);
  }

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
}
