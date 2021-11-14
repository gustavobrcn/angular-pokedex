import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  nameOrId!: string;
  pokemon!: any;
  pokemonName!: string;
  pokemonType!: string;
  pokemonImage!: string;
  x: any = [];

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.nameOrId = params['nameOrId'];
      this.pokeService.getPokemon(this.nameOrId).subscribe((data) => {
        this.getPokemonData(data);
        this.x.push(data);
        console.log(this.x);
      });
    });
  }

  getPokemonData = (data: any) => {
    this.pokemon = data;
    this.pokemonName = data.species.name;
    this.pokemonType = data.types[0].type.name;
    this.pokemonImage = data.sprites.other['official-artwork'].front_default;
  };
}
