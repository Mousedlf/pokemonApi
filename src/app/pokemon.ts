export interface Pokemon {
  id: number
  pokedexId: number
  name: string
  image: string
  sprite: string
  stats: {
    HP: number;
    attack: number;
  }
  apiResistances: [
    {
    name: string
  }
  ]

}
