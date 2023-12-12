import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../pokemon";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {

  pokemon: Observable<Pokemon>
  pokemonService :PokemonService = inject(PokemonService)
  route : ActivatedRoute = inject(ActivatedRoute)
  pokemonId = 0

  constructor() {
    this.pokemonId = Number(this.route.snapshot.params['id'])
    this.pokemon = this.pokemonService.getPokemonById(this.pokemonId)
    console.log(this.pokemon)

  }

}
