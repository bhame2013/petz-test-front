import { useLoadDate } from "@/presentation";
import Select from "@/presentation/components/form/select";

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
