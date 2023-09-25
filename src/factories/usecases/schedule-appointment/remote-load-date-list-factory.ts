import { RemoteLoadDateList } from "src/data/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "src/factories/http";

export const makeRemoteLoadDateList = () => {
  return new RemoteLoadDateList(makeApiUrl("/scheduling/date"), makeAxiosHttpClient());
};
