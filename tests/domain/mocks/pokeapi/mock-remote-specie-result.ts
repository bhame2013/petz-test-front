import { LoadSpecie } from "src/domain/usecases";

export const mockRemoteSpecieModel = (): LoadSpecie.Model => ({
  generation: {
    name: "generation-i",
    url: "https://pokeapi.co/api/v2/generation/1/",
  },
});
