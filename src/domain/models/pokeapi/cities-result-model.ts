export type CitiesResultModel<T = { name: string; url: string }> = {
  id: number;
  name: string;
  locations: T[];
  pokedexes: T[];
  main_generation: T;
  version_groups: T[];
  names: {
    language: T;
    name: string;
  }[];
};
