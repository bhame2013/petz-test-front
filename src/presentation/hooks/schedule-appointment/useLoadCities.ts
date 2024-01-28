import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

import { container, pokeApiTypes } from "@/container";
import { CreateAppointment, NoContentError, LoadCitiesList } from "@/domain";

export function useLoadCities() {
  const { setValue, setError, clearErrors, watch } = useFormContext<CreateAppointment.Params>();

  const region = watch("region");

  async function fetcher() {
    try {
      clearErrors("region");
      setValue("city", "");

      const response = await container.get<LoadCitiesList>(pokeApiTypes.RemoteLoadCitiesList).loadAll(region)

      return response
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
