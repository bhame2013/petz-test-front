import { useForm, FormProvider } from "react-hook-form";

import { CreateAppointment } from "src/domain/usecases";
import { Input } from "src/presentation/components/form";

import {
  Total,
  AddPatient,
  SelectDate,
  SelectTime,
  SelectRegion,
  SelectCities,
} from "../components";

import { resolver } from "./schema";

import { IFormScheduleAppointmentProps } from "./interfaces";

import * as S from "./styles";

export function FormScheduleAppointment({
  createAppointment,
}: IFormScheduleAppointmentProps) {
  const methods = useForm<CreateAppointment.Params>({
    resolver,
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    await createAppointment(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <S.FormScheduleAppointment>
          <h2 className="font-24-semibold">
            Preencha o formulário abaixo para agendar sua consulta
          </h2>

          <div className="form-content">
            <div>
              <Input
                label="Nome"
                name="name"
                type="text"
                placeholder="Digite seu nome"
              />

              <Input
                label="Sobrenome"
                name="surname"
                type="text"
                placeholder="Digite seu sobrenome"
              />
            </div>

            <div>
              <SelectRegion />

              <SelectCities />
            </div>

            <AddPatient />

            <div>
              <SelectDate />

              <SelectTime />
            </div>

            <Total />
          </div>
        </S.FormScheduleAppointment>
      </form>
    </FormProvider>
  );
}
