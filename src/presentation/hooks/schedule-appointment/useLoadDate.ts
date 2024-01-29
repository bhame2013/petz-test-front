import { useQuery } from "@tanstack/react-query";

import { RemoteLoadDateList } from "@/data";
import { container, scheduleAppointmentTypes } from "@/container";

export function useLoadDate() {
  const fetcher = async () => {
    const response = await container
      .get<RemoteLoadDateList>(scheduleAppointmentTypes.RemoteLoadDateList)
      .loadAll();

    return response;
  };

  return useQuery({
    queryKey: ["date"],
    queryFn: fetcher,
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
  });
}
