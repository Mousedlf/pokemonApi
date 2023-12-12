import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {PokemonType} from "../pokemon-type";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-type-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-type-page.component.html',
  styleUrl: './pokemon-type-page.component.css'
})
export class PokemonTypePageComponent {

  pokemonService: PokemonService = inject(PokemonService)
  types: Observable<PokemonType[]> = this.pokemonService.getPokemonTypes()

  constructor() {
    console.log(this.types)

  }

}
