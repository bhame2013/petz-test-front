import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

import { CreateAppointment } from "@domain";

export function usePayment() {
  const loadPayment = useCasesStore(state => state.loadPayment)
  const loadGenerationsPokemonsList = useCasesStore(state => state.loadGenerationsPokemonsList)

  const { watch } = useFormContext<CreateAppointment.Params>();

  const patients = watch("patients");

  async function getPayment() {
    const activePatients = patients?.filter((patient) => !!patient);

    const generations = (await loadGenerationsPokemonsList.loadAll(activePatients)) || [];

    return await loadPayment.load({
      generations,
      numberPatients: activePatients?.length || 0,
    });
  }

  return useQuery(["generations", JSON.stringify(patients)], getPayment, {
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
  });
}
