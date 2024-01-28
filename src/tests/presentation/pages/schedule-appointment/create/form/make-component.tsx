import { CreateAppointment } from "@/domain";
import { FormScheduleAppointment } from "@/presentation";

import { QueryClientProvider } from "@/tests";

export function makeComponent(createAppointment: makeComponentProps) {
  return (
    <QueryClientProvider>
      <FormScheduleAppointment createAppointment={createAppointment} />
    </QueryClientProvider>
  );
}

export type makeComponentProps = (params: CreateAppointment.Params) => void
