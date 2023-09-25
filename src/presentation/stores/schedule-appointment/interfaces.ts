import {
  LoadPokemon,
  LoadPayment,
  LoadCitiesList,
  LoadRegionsList,
  LoadPokemonsList,
  LoadTimeSchedule,
  LoadDateSchedule,
  LoadGenerationsPokemonsList,
  CreateAppointment,
} from "src/domain/usecases";

export interface IStore {
  loadPayment: LoadPayment;
  loadPokemon: LoadPokemon;
  loadCitiesList: LoadCitiesList;
  loadTimeList: LoadTimeSchedule;
  loadDateList: LoadDateSchedule;
  loadRegionsList: LoadRegionsList;
  loadPokemonsList: LoadPokemonsList;
  createAppointmentList: CreateAppointment;
  loadGenerationsPokemonsList: LoadGenerationsPokemonsList;
}
