import { RemoteLoadTimeList } from "src/data/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "src/factories/http";

export const makeRemoteLoadTimeList = () => {
  return new RemoteLoadTimeList(makeApiUrl("/scheduling/time"), makeAxiosHttpClient());
};
