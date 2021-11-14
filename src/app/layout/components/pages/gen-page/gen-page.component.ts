import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service';
import { Pokemon } from '../../../../../pokemon';

@Component({
  selector: 'app-gen-page',
  templateUrl: './gen-page.component.html',
  styleUrls: ['./gen-page.component.scss'],
})
export class GenPageComponent implements OnInit {
  private gens: GenMap = {
    '1': { start: 1, end: 151 },
    '2': { start: 152, end: 251 },
    '3': { start: 252, end: 386 },
    '4': { start: 387, end: 493 },
    '5': { start: 494, end: 649 },
    '6': { start: 650, end: 721 },
    '7': { start: 722, end: 809 },
    '8': { start: 810, end: 898 },
  };
  allPokemon!: any;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const gen = params['genNum'];
      this.allPokemon = this.pokeService.getPokemonByGeneration(this.gens[gen]);
      this.allPokemon = this.allPokemon.sort(
        (firstEl: Pokemon, secondEl: Pokemon) => {
          return firstEl.id - secondEl.id;
        }
      );
    });
  }
}

interface Range {
  start: number;
  end: number;
}

interface GenMap {
  [key: string]: Range;
}
