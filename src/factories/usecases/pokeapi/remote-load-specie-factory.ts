import { RemoteLoadSpecie } from "src/data/usecases";
import { makeAxiosHttpClient } from "src/factories/http";

export const makeRemoteLoadSpecie = () => {
  return new RemoteLoadSpecie(makeAxiosHttpClient());
};
