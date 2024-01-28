import { PokemonResultModel } from "@/domain"

export interface LoadPokemonsList {
  loadAll: (offset: number) => Promise<LoadPokemonsList.Model | undefined>;
}

export namespace LoadPokemonsList {
  export type Model = PokemonResultModel
}
