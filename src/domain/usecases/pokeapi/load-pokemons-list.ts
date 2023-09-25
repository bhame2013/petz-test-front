import { PokemonResultModel } from "src/domain/models/pokeapi"

export interface LoadPokemonsList {
  loadAll: (offset: number) => Promise<LoadPokemonsList.Model | undefined>;
}

export namespace LoadPokemonsList {
  export type Model = PokemonResultModel
}
