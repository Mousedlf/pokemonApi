import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "./pokemon";
import {PokemonType} from "./pokemon-type";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private http = inject(HttpClient)
  url = 'https://pokebuildapi.fr/api/v1'


  getPokemons(): Observable<Pokemon[]>
  {
    return this.http.get<Pokemon[]>(this.url + '/pokemon/limit/20')
  }

  getPokemonById(id:number): Observable<Pokemon>
  {
    return this.http.get<Pokemon>(this.url + '/pokemon/' + id)
  }

  getPokemonTypes(): Observable<PokemonType[]>
  {
    return this.http.get<PokemonType[]>(this.url + '/types')
  }



}
