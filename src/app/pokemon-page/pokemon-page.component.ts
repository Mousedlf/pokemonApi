import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent {

  pokemonService: PokemonService = inject(PokemonService)
  pokemons: Observable<Pokemon[]> = this.pokemonService.getPokemons()


}
