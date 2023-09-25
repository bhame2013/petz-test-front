import { formatTime } from "src/utils";

import Select from "src/presentation/components/form/select";
import { useLoadTime } from "src/presentation/hooks/schedule-appointment";

export function SelectTime() {
  const { data, isFetching } = useLoadTime();

  const optionsTime = data?.map((time) => ({
    value: time,
    label: formatTime(time),
  }));

  return (
    <Select
      label="Horário de Atendimento"
      name="time"
      placeholder="Selecione um horário"
      loading={isFetching}
      optionsSelect={optionsTime}
    />
  );
}
