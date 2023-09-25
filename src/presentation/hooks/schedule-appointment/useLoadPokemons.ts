import { useInfiniteQuery } from "@tanstack/react-query";
import { useCasesStore } from "src/presentation/stores/schedule-appointment";

export function useLoadPokemons() {
  const loadPokemonsList = useCasesStore((state) => state.loadPokemonsList);

  async function getPokemonsList(pageParam: number) {
    return await loadPokemonsList.loadAll(pageParam * 20);
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
