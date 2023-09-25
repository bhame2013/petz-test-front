import { LoadGenerationsPokemonsList } from "../pokeapi";
import { PaymentResultModel } from "src/domain/models/schedule-appointment";

export interface LoadPayment {
  load: (params: LoadPayment.Params) => Promise<LoadPayment.Model>;
}

export namespace LoadPayment {
  export type Params = {
    numberPatients: number;
    generations: LoadGenerationsPokemonsList.Model;
  };

  export type Model = PaymentResultModel;
}
