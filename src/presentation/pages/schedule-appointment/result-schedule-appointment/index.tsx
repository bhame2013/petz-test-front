import { Button } from "@/presentation";

import { icons } from "./icons-status";

import { IResultScheduleAppointment } from "./interface";

import * as S from "./styles";

export function ResultScheduleAppointment({
  title,
  status,
  description,
}: IResultScheduleAppointment) {
  return (
    <S.ScheduleAppointmentSucess>
      <div className="sucess">
        <h3 className="font-20-bold">{title}</h3>

        {icons[status]}

        <p className="font-14-regular">{description}</p>

        <Button href="/agendar-consulta" text="Fazer Novo Agendamento" />
      </div>
    </S.ScheduleAppointmentSucess>
  );
}
