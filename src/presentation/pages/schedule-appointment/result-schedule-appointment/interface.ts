export type StatusResultScheduleAppointment  = "sucess" | "error"

export interface IResultScheduleAppointment {
  title: string;
  description: string;
  status: StatusResultScheduleAppointment;
}
