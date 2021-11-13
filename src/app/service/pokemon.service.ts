import { Injectable } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon = (idOrName: string): Observable<Pokemon> => {
    const url = `${this.apiUrl}/${idOrName}`;

    return this.http.get<Pokemon>(url);
  };
}
