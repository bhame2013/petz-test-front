import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

import { NoContentError } from "src/domain/errors";
import { CreateAppointment } from "src/domain/usecases";
import { useCasesStore } from "src/presentation/stores/schedule-appointment";

export function useLoadCities() {
  const loadCitiesList = useCasesStore(state => state.loadCitiesList)

  const { setValue, setError, clearErrors, watch } = useFormContext<CreateAppointment.Params>();

  const region = watch("region");

  async function fetcher() {
    try {
      clearErrors("region");
      setValue("city", "");

      return await loadCitiesList.loadAll(region);
    } catch (err) {
      if (err instanceof NoContentError) {
        setError("region", {
          message: err.message,
        });
      }

      return null;
    }
  }

  return useQuery(["city", region], fetcher, {
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    enabled: !!region,
  });
}
