import { CreateAppointment } from "src/domain/usecases";
import { useCasesStore } from "src/presentation/stores/schedule-appointment";

export function useCreateAppointment() {
  const createAppointmentList = useCasesStore(
    (state) => state.createAppointmentList
  );

  async function create(data: CreateAppointment.Params) {
    const response = await createAppointmentList.create(data);

    return response;
  }

  return { create };
}
