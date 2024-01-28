import { RegionResultModel } from "@/domain"

export interface LoadRegionsList {
  loadAll: () => Promise<LoadRegionsList.Model | undefined>;
}

export namespace LoadRegionsList {
  export type Model = RegionResultModel
}