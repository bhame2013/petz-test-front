import { CreateAppointment } from "src/domain/usecases";
import { FormScheduleAppointment } from "src/presentation/pages/schedule-appointment/create/form";

import { QueryClientProvider } from "../libs/use-query-provider";

export function makeComponent(createAppointment: makeComponentProps) {
  return (
    <QueryClientProvider>
      <FormScheduleAppointment createAppointment={createAppointment} />
    </QueryClientProvider>
  );
}

export type makeComponentProps = (params: CreateAppointment.Params) => void
