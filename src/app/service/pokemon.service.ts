import { Injectable } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
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

  searchedPokemon!: Pokemon;

  constructor(private http: HttpClient) {}

  getPokemon = (idOrName: string | number): Observable<any> => {
    const url = `${this.apiUrl}/${idOrName}`;

    return this.http.get<any>(url);
  };

  getPokemonByGeneration(range: Range) {
    const pokemon: any = [];
    for (let i = range.start; i <= range.end; i++) {
      const data = this.getPokemon(i).subscribe((data) => {
        pokemon.push(data);
      });
    }
    return pokemon;
  }
}

interface Range {
  start: number;
  end: number;
}

interface GenMap {
  [key: string]: Range;
}
