import { PokemonDetailModel } from "src/domain/models/pokeapi";

export interface LoadPokemon {
  load: (url: string) => Promise<LoadPokemon.Model | undefined>;
}

export namespace LoadPokemon {
  export type Model = PokemonDetailModel
}