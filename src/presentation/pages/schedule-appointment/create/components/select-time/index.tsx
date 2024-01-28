import { useLoadTime, formatTime } from "@/presentation"
import Select from "@/presentation/components/form/select";

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
