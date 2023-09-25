export interface LoadGenerationsPokemonsList {
  loadAll: (patients: string[]) => Promise<LoadGenerationsPokemonsList.Model>;
}

export namespace LoadGenerationsPokemonsList {
  export type Model = number[];
}
