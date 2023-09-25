import { useQuery } from "@tanstack/react-query";
import { useCasesStore } from "src/presentation/stores/schedule-appointment";

export function useLoadDate() {
  const loadDateList = useCasesStore(state => state.loadDateList)
  
  const fetcher = () => loadDateList.loadAll();

  return useQuery(["date"], fetcher, {
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
  });
}
