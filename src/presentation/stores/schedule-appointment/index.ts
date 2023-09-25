import { create } from "zustand";

import {
  makeRemoteLoadPayment,
  makeRemoteLoadPokemon,
  makeRemoteLoadTimeList,
  makeRemoteLoadDateList,
  makeRemoteLoadCitiesList,
  makeRemoteLoadRegionsList,
  makeRemoteLoadPokemonsList,
  makeRemoteCreateAppointmentList,
  makeRemoteLoadGenerationsPokemonsList,
} from "src/factories/usecases";

import { IStore } from "./interfaces"

export const useCasesStore = create<IStore>(() => ({
  loadPayment: makeRemoteLoadPayment(),
  loadPokemon: makeRemoteLoadPokemon(),
  loadTimeList: makeRemoteLoadTimeList(),
  loadDateList: makeRemoteLoadDateList(),
  loadCitiesList: makeRemoteLoadCitiesList(),
  loadRegionsList: makeRemoteLoadRegionsList(),
  loadPokemonsList: makeRemoteLoadPokemonsList(),
  createAppointmentList: makeRemoteCreateAppointmentList(),
  loadGenerationsPokemonsList: makeRemoteLoadGenerationsPokemonsList(),
}));
