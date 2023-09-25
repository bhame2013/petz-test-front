import { RemoteLoadPokemonsList } from "src/data/usecases";
import { makeAxiosHttpClient, makePokeApiUrl } from "src/factories/http";

export const makeRemoteLoadPokemonsList = () => {
  return new RemoteLoadPokemonsList(makePokeApiUrl(`/pokemon/`), makeAxiosHttpClient());
};
