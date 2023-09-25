import { RemoteCreateAppointment } from "src/data/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "src/factories/http";

export const makeRemoteCreateAppointmentList = () => {
  return new RemoteCreateAppointment(makeApiUrl("/scheduling/create"), makeAxiosHttpClient());
};
