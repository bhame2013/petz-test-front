import { CitiesResultModel } from "@/domain";

export interface LoadCitiesList {
  loadAll: (url: string) => Promise<LoadCitiesList.Model | undefined>;
}

export namespace LoadCitiesList {
  export type Model = CitiesResultModel;
}
