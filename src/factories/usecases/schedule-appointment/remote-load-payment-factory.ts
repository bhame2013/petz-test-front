import { RemoteLoadPayment } from "src/data/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "src/factories/http";

export const makeRemoteLoadPayment = () => {
  return new RemoteLoadPayment(makeApiUrl("scheduling/payment/"), makeAxiosHttpClient());
};
