import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PokemonPageComponent} from "./pokemon-page/pokemon-page.component";
import {PokemonTypePageComponent} from "./pokemon-type-page/pokemon-type-page.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";

export const routes: Routes = [
  {
    path:'', redirectTo:"/home", pathMatch: "full"
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'pokemons', component: PokemonPageComponent
  },
  {
    path:'pokemon/:id', component: PokemonDetailsComponent
  },
  {
    path:'types', component: PokemonTypePageComponent
  },
];
