import { LoadPokemonsList } from "src/domain/usecases";

export const mockRemotePokemonListModel = (): LoadPokemonsList.Model => ({
  count: 1281,
  next: "https://pokeapi.co/api/v2/pokemon/?offset=60&limit=20",
  previous: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
});
