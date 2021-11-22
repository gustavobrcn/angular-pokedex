import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  nameOrId!: string;
  $pokemon = new Observable<Pokemon>();

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.nameOrId = params['nameOrId'];
      this.$pokemon = this.pokeService.getPokemon(this.nameOrId);
    });
  }
}
