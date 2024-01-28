import { PokemonDetailModel } from "@/domain"

export interface LoadPokemon {
  load: (url: string) => Promise<LoadPokemon.Model | undefined>;
}

export namespace LoadPokemon {
  export type Model = PokemonDetailModel
}