import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { Pokemon } from 'src/pokemon';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  pokemon!: Pokemon;

  pokeTypes: Types = {
    normal: '#ACA974',
    grass: '#3E9709',
    fire: '#FC0C0B',
    water: '#0A7ABC',
    flying: '#5EB9B2',
    bug: '#BDDD6E',
    poison: '#A819D7',
    electric: '#FFFA24',
    ground: '#706515',
    fighting: '#800B11',
    psychic: '#F55792',
    rock: '#474026',
    ice: '#C4CEE5',
    ghost: '#472B53',
    dragon: '#8A55FD',
    dark: '#000000',
    steel: '#7B8E8A',
    fairy: '#FFA0C2',
  };
  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    const ranNum = this.getRandomInt(899);
    this.pokeService.getPokemon(ranNum).subscribe((data) => {
      this.pokemon = this.getPokemonData(data);
    });
  }

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  getPokemonData = (data: any) => {
    const pokemon = {
      id: data.id,
      name: data.species.name,
      type: data.types[0].type.name,
      image: data.sprites.other['official-artwork'].front_default,
    };

    return pokemon;
  };
}

interface Types {
  [key: string]: string;
}
