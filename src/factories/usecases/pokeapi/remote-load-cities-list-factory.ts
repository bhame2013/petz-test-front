import { RemoteLoadCitiesList } from "src/data/usecases";
import { makeAxiosHttpClient, makePokeApiUrl } from "src/factories/http";

export const makeRemoteLoadCitiesList = () => {
  return new RemoteLoadCitiesList(makePokeApiUrl("/region/"), makeAxiosHttpClient());
};
