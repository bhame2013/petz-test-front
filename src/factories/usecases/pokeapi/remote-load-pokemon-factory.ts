import { RemoteLoadPokemon } from "src/data/usecases";
import { makeAxiosHttpClient, makePokeApiUrl } from "src/factories/http";

export const makeRemoteLoadPokemon = () => {
  return new RemoteLoadPokemon(makePokeApiUrl("/pokemon/"), makeAxiosHttpClient());
};
