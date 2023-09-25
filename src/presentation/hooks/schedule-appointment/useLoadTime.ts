import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

import { CreateAppointment } from "src/domain/usecases";
import { useCasesStore } from "src/presentation/stores/schedule-appointment";

export function useLoadTime() {
  const loadTimeList = useCasesStore(state => state.loadTimeList);

  const { watch, setValue } = useFormContext<CreateAppointment.Params>();

  const date = watch("date");

  const fetcher = async () => {
    setValue("time", "");

    return await loadTimeList.loadAll({ date });
  };

  return useQuery(["time", date], fetcher, {
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    enabled: !!date,
  });
}
