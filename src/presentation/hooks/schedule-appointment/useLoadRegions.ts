import { useQuery } from "@tanstack/react-query";
import { useCasesStore } from "src/presentation/stores/schedule-appointment";

export function useLoadRegions() {
  const loadRegionsList = useCasesStore(state => state.loadRegionsList);

  const fetcher = () => loadRegionsList.loadAll();

  return useQuery(["regions"], fetcher, {
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
  });
}
