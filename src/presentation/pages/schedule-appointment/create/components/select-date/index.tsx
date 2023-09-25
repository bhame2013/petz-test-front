import Select from "src/presentation/components/form/select";
import { useLoadDate } from "src/presentation/hooks/schedule-appointment";

export function SelectDate() {

  const { data, isFetching } = useLoadDate()

  const optionsHours = data?.map(hour => ({ label: hour, value: hour }))
  
  return (
    <Select
      label="Data para Atendimento"
      name="date"
      placeholder="Selecione uma data"
      loading={isFetching}
      optionsSelect={optionsHours}
    />
  );
}
