import { CreateAppointment } from "@/domain";

export interface IFormScheduleAppointmentProps {
  createAppointment: (params: CreateAppointment.Params) => void;
}
