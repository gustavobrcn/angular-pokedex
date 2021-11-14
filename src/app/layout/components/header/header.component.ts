import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { SearchService } from 'src/app/service/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text!: string;
  @Output() searchPokemon = new EventEmitter();

  constructor(
    private search: SearchService,
    private pokeService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleSearch = () => {
    if (!this.text) {
      return;
    }

    this.text = '';
  };
}
