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

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.nameOrId = params['nameOrId'];
      this.pokeService.getPokemon(this.nameOrId).subscribe((data) => {
        this.getPokemonData(data);
      });
    });
  }

  getPokemonData = (data: any) => {
    this.pokemon = {
      id: data.id,
      name: data.species.name,
      type: data.types[0].type.name,
      image: data.sprites.other['official-artwork'].front_default,
    };
  };
}
