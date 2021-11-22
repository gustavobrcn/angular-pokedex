import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon.model';
import { GenMap, idRangeByGeneration } from '../constants/generations';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  searchedPokemon!: Pokemon;

  constructor(private http: HttpClient) {}

  getPokemon = (idOrName: string | number): Observable<Pokemon> => {
    const url = `${this.apiUrl}/${idOrName}`;

    return this.http.get<any>(url).pipe(map(Pokemon.fromJson));
  };

  getPokemonByGeneration(generation: keyof GenMap): Observable<Pokemon[]> {
    const range = idRangeByGeneration[generation];
    const pokemon: Observable<Pokemon>[] = [];

    for (let i = range.start; i <= range.end; i++) {
      const observable = this.getPokemon(i);
      pokemon.push(observable);
    }

    // return a single observable that emits an array of pokemon
    return forkJoin(pokemon);
  }
}
