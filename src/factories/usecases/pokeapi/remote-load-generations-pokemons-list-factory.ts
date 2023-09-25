import { RemoteLoadGenerationsPokemonsList } from "src/data/usecases";

import { makeRemoteLoadSpecie } from "./remote-load-specie-factory";
import { makeRemoteLoadPokemon } from "./remote-load-pokemon-factory";

export const makeRemoteLoadGenerationsPokemonsList = () => {
  const remoteLoadSpecie = makeRemoteLoadSpecie();
  const remoteLoadPokemon = makeRemoteLoadPokemon();

  return new RemoteLoadGenerationsPokemonsList(
    remoteLoadSpecie,
    remoteLoadPokemon,
  );
};
