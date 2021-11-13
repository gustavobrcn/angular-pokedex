import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text!: string;
  @Output() searchPokemon = new EventEmitter();

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {}

  handleSearch = () => {
    this.pokeService.getPokemon(this.text).subscribe((pokemon) => {
      console.log(pokemon);
    });

    this.text = '';
    this.searchPokemon.emit();
  };
}
