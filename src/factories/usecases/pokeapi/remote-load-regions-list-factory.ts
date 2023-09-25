import { RemoteLoadRegionsList } from "src/data/usecases";
import { makeAxiosHttpClient, makePokeApiUrl } from "src/factories/http";

export const makeRemoteLoadRegionsList = () => {
  return new RemoteLoadRegionsList(makePokeApiUrl("/region"), makeAxiosHttpClient());
};
