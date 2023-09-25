import { CitiesResultModel } from "src/domain/models/pokeapi";

export interface LoadCitiesList {
  loadAll: (url: string) => Promise<LoadCitiesList.Model | undefined>;
}

export namespace LoadCitiesList {
  export type Model = CitiesResultModel;
}
