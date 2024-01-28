import { Container } from "inversify";

import {
RemoteLoadPayment,
RemoteLoadDateList,
RemoteLoadTimeList,
RemoteCreateAppointment,
} from "@/data/usecases/schedule-appointment";

import { infraContainer } from "../infra";
import { scheduleAppointmentTypes } from "./types";

const scheduleAppointmentContainer = new Container({
  defaultScope: "Singleton",
  autoBindInjectable: true,
});

scheduleAppointmentContainer.parent = infraContainer;

scheduleAppointmentContainer.bind(scheduleAppointmentTypes.RemoteLoadPayment).to(RemoteLoadPayment);
scheduleAppointmentContainer.bind(scheduleAppointmentTypes.RemoteLoadDateList).to(RemoteLoadDateList);
scheduleAppointmentContainer.bind(scheduleAppointmentTypes.RemoteLoadTimeList).to(RemoteLoadTimeList);
scheduleAppointmentContainer.bind(scheduleAppointmentTypes.RemoteCreateAppointment).to(RemoteCreateAppointment);

export { scheduleAppointmentContainer };
