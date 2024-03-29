export interface CreateAppointment {
  create: (
    params: CreateAppointment.Params
  ) => Promise<CreateAppointment.Model>;
}

export namespace CreateAppointment {
  export type Params = {
    date: string;
    time: string;
    name: string;
    city: string;
    region: string;
    surname: string;
    patients: string[];
  };

  export type Model = {
    date: string;
    hour: string;
    numberPatients: number;
  };
}
