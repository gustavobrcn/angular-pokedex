import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service';
import { Generation } from 'src/app/constants';

@Component({
  selector: 'app-gen-page',
  templateUrl: './gen-page.component.html',
  styleUrls: ['./gen-page.component.scss'],
})
export class GenPageComponent implements OnInit {
  $allPokemon = of<Pokemon[]>([]);

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const gen = params['genNum'] as Generation;
      this.$allPokemon = this.pokeService.getPokemonByGeneration(gen).pipe(
        map((pokemon) =>
          pokemon.sort((firstEl: Pokemon, secondEl: Pokemon) => {
            return firstEl.id - secondEl.id;
          })
        )
      );
    });
  }
}
