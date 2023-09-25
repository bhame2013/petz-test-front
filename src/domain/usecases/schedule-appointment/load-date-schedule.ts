import { DateResultModel } from "src/domain/models/schedule-appointment";

export interface LoadDateSchedule {
  loadAll: () => Promise<LoadDateSchedule.Model>;
}
export namespace LoadDateSchedule {
  export type Model = DateResultModel;
}
