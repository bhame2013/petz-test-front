import { useQuery } from "@tanstack/react-query";

import { LoadRegionsList } from "@/domain";
import { container, pokeApiTypes } from "@/container";

export function useLoadRegions() {
  
  async function fetcher() {
    const response = await container
      .get<LoadRegionsList>(pokeApiTypes.RemoteLoadRegionsList)
      .loadAll();

    return response;
  }

  return useQuery(["regions"], fetcher, {
    retry: 0,
    staleTime: 0,
    refetchInterval: 0,
    refetchOnWindowFocus: false,
  });
}
