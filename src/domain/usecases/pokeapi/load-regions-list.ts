import { RegionResultModel } from "src/domain/models/pokeapi";

export interface LoadRegionsList {
  loadAll: () => Promise<LoadRegionsList.Model | undefined>;
}

export namespace LoadRegionsList {
  export type Model = RegionResultModel
}