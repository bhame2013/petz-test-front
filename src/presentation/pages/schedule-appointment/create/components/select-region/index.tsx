import Select from "src/presentation/components/form/select";
import { useLoadRegions } from "src/presentation/hooks/schedule-appointment";

export function SelectRegion() {
  const { data, isFetching } = useLoadRegions();

  const regions = data?.results.map((region) => {
    const urlParts = region.url.split("/");
    const id = urlParts[urlParts.length - 2];

    return { label: region.name, value: id };
  });

  return (
    <Select
      label="Região"
      name="region"
      placeholder="Selecione a região"
      loading={isFetching}
      optionsSelect={regions}
    />
  );
}
