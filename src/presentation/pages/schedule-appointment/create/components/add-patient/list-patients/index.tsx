import { useLoadPokemons } from "@/presentation";
import { SearchPokemons } from "./search-pokemons";

export function ListPatients({ patients, handleDeletePatient }: { patients: string[],  handleDeletePatient(uid: string): void }) {
  const { data, fetchNextPage, isFetching } = useLoadPokemons();

  const pokemons = data?.pages.reduce((reducer, item) => {
    const formattedList = item?.results.map((pokemon) => ({
      label: pokemon.name,
      value: pokemon.url,
    }));

    if (!formattedList) {
      return [...reducer];
    }

    return [...reducer, ...formattedList];
  }, [] as { label: string; value: string }[]);

  return (
    <>
      {patients.map((patientUid, index) => (
        <div key={patientUid} >
          <SearchPokemons
            patientUid={patientUid}
            loading={isFetching}
            name="patients"
            listPosition={index}
            label={`Pokémon 0${index + 1}`}
            placeholder="Selecione seu pokémon"
            optionsSelect={pokemons}
            callback={fetchNextPage}
            handleDeletePatient={handleDeletePatient}
          />
        </div>
      ))}
    </>
  );
}
