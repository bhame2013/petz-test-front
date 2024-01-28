import { useLoadCities } from "@/presentation";
import Select from "@/presentation/components/form/select";

export function SelectCities() {
  const { data, isFetching } = useLoadCities();

  const cities = data?.locations.map((local) => {
    const urlParts = local.url.split("/");
    const id = urlParts[urlParts.length - 2];

    return {
      label: local.name,
      value: id,
    };
  });

  return (
    <Select
      loading={isFetching}
      name="city"
      label="Cidade"
      placeholder="Selecione sua cidade"
      optionsSelect={cities}
    />
  );
}
