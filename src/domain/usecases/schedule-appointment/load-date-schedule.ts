export interface LoadDateSchedule {
  loadAll: () => Promise<LoadDateSchedule.Model>;
}

export namespace LoadDateSchedule {
  export type Model = string[];
}
