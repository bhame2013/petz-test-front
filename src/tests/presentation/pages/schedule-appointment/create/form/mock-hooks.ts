import {
  mockRemotePokemonListModel,
  mockRemoteRegionResultModel,
  mockRemoteCitiesResultModel,
  mockRemoteLoadPaymentResultModel,
  mockRemoteLoadDateListResultModel,
  mockRemoteLoadTimeListResultModel,
} from "@/tests";

export const hooks = {
  useLoadRegions() {
    return {
      data: mockRemoteRegionResultModel(),
      isFetching: false,
    };
  },
  useLoadPokemons() {
    return {
      data: { pages: [mockRemotePokemonListModel()] },
      isFetching: false,
    };
  },
  useLoadCities() {
    return {
      data: mockRemoteCitiesResultModel(),
      isFetching: false,
    };
  },
  useLoadDate() {
    return {
      data: mockRemoteLoadDateListResultModel(),
      isFetching: false,
    };
  },
  useLoadTime() {
    return {
      data: mockRemoteLoadTimeListResultModel(),
      isFetching: false,
    };
  },
  usePayment() {
    return {
      data: mockRemoteLoadPaymentResultModel(),
      isFetching: false,
    };
  },
  useCreateAppointment() {
    return {
      create: () => {},
    };
  },
};


