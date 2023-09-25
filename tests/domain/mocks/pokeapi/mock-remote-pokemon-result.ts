import { LoadPokemon } from "src/domain/usecases";

export const mockRemotePokemonResultModel = (): LoadPokemon.Model => ({
  species: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-species/1/",
  },
});
