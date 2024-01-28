import { LoadGenerationsPokemonsList } from "@/domain";

export interface LoadPayment {
  load: (params: LoadPayment.Params) => Promise<LoadPayment.Model>;
}

export namespace LoadPayment {
  export type Params = {
    numberPatients: number;
    generations: LoadGenerationsPokemonsList.Model;
  };

  export type Model = {
    tax: string;
    total: string;
    subtotal: string;
    taxValue: string;
    taxLimit: string;
    taxTotal: string;
    unitaryPrice: string;
    numberPatients: number;
  };
}
