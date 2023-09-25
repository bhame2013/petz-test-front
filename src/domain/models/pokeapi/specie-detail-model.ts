export enum Generations {
  "generation-i" = 1,
  "generation-ii" = 2,
  "generation-iii" = 3,
  "generation-iv" = 4,
  "generation-v" = 5,
  "generation-vi" = 6,
  "generation-vii" = 7,
  "generation-viii" = 8,
  "generation-ix" = 9,
}

export type GenerationsNames = "generation-i" | "generation-ii" | "generation-iii" | "generation-iv" | "generation-v" | "generation-vi" | "generation-vii" | "generation-viii" | "generation-ix";

export type SpecieDetailModel = {
  generation: {
    name: GenerationsNames;
    url: string;
  };
};
