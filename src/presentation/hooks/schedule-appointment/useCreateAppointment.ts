import { CreateAppointment } from "@/domain";
import { container, scheduleAppointmentTypes } from "@/container";

export function useCreateAppointment() {

  async function create(data: CreateAppointment.Params) {
    const response = await container.get<CreateAppointment>(scheduleAppointmentTypes.RemoteCreateAppointment).create(data)

    return response;
  }

  return { create };
}
