import { TimeResultModel } from "@/domain";

export interface LoadTimeSchedule {
  loadAll: (params: LoadTimeSchedule.Params) => Promise<LoadTimeSchedule.Model>;
}
export namespace LoadTimeSchedule {
  export type Params = {
    date: string;
  };

  export type Model = TimeResultModel;
}
