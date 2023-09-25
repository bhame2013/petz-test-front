import { TimeResultModel } from "src/domain/models/schedule-appointment";

export interface LoadTimeSchedule {
  loadAll: (params: LoadTimeSchedule.Params) => Promise<LoadTimeSchedule.Model>;
}
export namespace LoadTimeSchedule {
  export type Params = {
    date: string;
  };

  export type Model = TimeResultModel;
}
