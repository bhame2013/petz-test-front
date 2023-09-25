import { Generations } from "src/domain/models";

import { LoadSpecie, LoadPokemon, LoadGenerationsPokemonsList } from "src/domain/usecases";

export class RemoteLoadGenerationsPokemonsList implements LoadGenerationsPokemonsList {
  constructor(
    private readonly loadSpecie: RemoteLoadGenerationsPokemonsList.Params['loadSpecie'],
    private readonly loadPokemon: RemoteLoadGenerationsPokemonsList.Params['loadPokemon'],
  ) {}

  async loadSpeciesUrls(patients: string[]) {
    const loadPokemonPromises = patients?.map((patient) => this.loadPokemon.load(patient)) || [];

    const pokemons = await Promise.all(loadPokemonPromises);

    return pokemons.map(pokemon => pokemon?.species.url) as string[];
  }

  async loadSpecies(speciesUrls: string[]) {
    const loadSpeciesPromises  = speciesUrls.map((url) =>
      this.loadSpecie.load(url)
    );

    return Promise.all(loadSpeciesPromises);
  }

  async loadAll(patients: string[]) {
    const speciesUrls = await this.loadSpeciesUrls(patients)
    
    const species = await this.loadSpecies(speciesUrls);

    const generationNumbers = species.map((specie) => {
      const name = specie?.generation.name;
      
      return name && Generations[name] ? Number(Generations[name]) : 1;
    });

    return generationNumbers;
  }
}

export namespace RemoteLoadGenerationsPokemonsList {
  export type Params = {
    loadSpecie: LoadSpecie;
    loadPokemon: LoadPokemon;
  };
}
