import { CreateAppointment } from "src/domain/usecases";

export interface IFormScheduleAppointmentProps {
  createAppointment: (params: CreateAppointment.Params) => void;
}
