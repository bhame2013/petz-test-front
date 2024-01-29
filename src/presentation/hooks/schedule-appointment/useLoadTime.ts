import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

import { RemoteLoadTimeList } from "@/data";
import { CreateAppointment } from "@/domain";
import { container, scheduleAppointmentTypes } from "@/container";

export function useLoadTime() {
  const { watch, setValue } = useFormContext<CreateAppointment.Params>();

  const date = watch("date");

  const fetcher = async () => {
    setValue("time", "");

    const response = await container
      .get<RemoteLoadTimeList>(scheduleAppointmentTypes.RemoteLoadTimeList)
      .loadAll({ date });

    return response;
  };

  return useQuery({
    queryKey: ["time", date],
    queryFn: fetcher,
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    enabled: !!date,
  });
}
