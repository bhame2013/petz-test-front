import { useInfiniteQuery } from "@tanstack/react-query";

import { LoadPokemonsList } from "@/domain";
import { container, pokeApiTypes } from "@/container";

export function useLoadPokemons() {

  async function getPokemonsList(pageParam: number) {
    const response = await container.get<LoadPokemonsList>(pokeApiTypes.RemoteLoadPokemonsList).loadAll(pageParam * 20);

    return response
  }

  return useInfiniteQuery(
    ["pokemons"],
    async ({ pageParam }) => {
      return await getPokemonsList(pageParam);
    },
    {
      retry: 0,
      staleTime: 0,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage?.next) return undefined;

        return allPages.length + 1;
      },
    }
  );
}
