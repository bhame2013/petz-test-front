import { SpecieDetailModel } from "src/domain/models/pokeapi";

export interface LoadSpecie {
  load: (url: string) => Promise<LoadSpecie.Model | undefined>;
}

export namespace LoadSpecie {
  export type Model = SpecieDetailModel
}