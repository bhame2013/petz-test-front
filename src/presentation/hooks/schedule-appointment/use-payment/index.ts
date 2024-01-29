import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

import {
  LoadPayment,
  CreateAppointment,
  LoadGenerationsPokemonsList,
} from "@/domain";
import { container, pokeApiTypes, scheduleAppointmentTypes } from "@/container";

export function usePayment() {
  const { watch } = useFormContext<CreateAppointment.Params>();

  const patients = watch("patients");

  async function fetcher() {
    const activePatients = patients?.filter((patient) => !!patient);

    const generations =
      (await container
        .get<LoadGenerationsPokemonsList>(
          pokeApiTypes.RemoteLoadGenerationsPokemonsList
        )
        .loadAll(activePatients)) || [];

    const response = await container
      .get<LoadPayment>(scheduleAppointmentTypes.RemoteLoadPayment)
      .load({
        generations,
        numberPatients: activePatients?.length || 0,
      });

    return response;
  }

  const stringifyPatients = JSON.stringify(patients);

  return useQuery({
    queryKey: ["generations", stringifyPatients],
    queryFn: fetcher,
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    enabled: !!patients,
  });
}
