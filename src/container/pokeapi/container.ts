import { Container } from "inversify";

import {
  RemoteLoadSpecie,
  RemoteLoadPokemon,
  RemoteLoadCitiesList,
  RemoteLoadRegionsList,
  RemoteLoadPokemonsList,
  RemoteLoadGenerationsPokemonsList,
} from "@/data";

import { pokeApiTypes } from "./types";
import { infraContainer } from "../infra";

const pokeApiContainer = new Container({
  defaultScope: "Singleton",
  autoBindInjectable: true,
});

pokeApiContainer.parent = infraContainer;

pokeApiContainer.bind(pokeApiTypes.RemoteLoadSpecie).to(RemoteLoadSpecie);
pokeApiContainer.bind(pokeApiTypes.RemoteLoadPokemon).to(RemoteLoadPokemon);
pokeApiContainer.bind(pokeApiTypes.RemoteLoadCitiesList).to(RemoteLoadCitiesList);
pokeApiContainer.bind(pokeApiTypes.RemoteLoadRegionsList).to(RemoteLoadRegionsList);
pokeApiContainer.bind(pokeApiTypes.RemoteLoadPokemonsList).to(RemoteLoadPokemonsList);
pokeApiContainer.bind(pokeApiTypes.RemoteLoadGenerationsPokemonsList).to(RemoteLoadGenerationsPokemonsList);

export { pokeApiContainer };
