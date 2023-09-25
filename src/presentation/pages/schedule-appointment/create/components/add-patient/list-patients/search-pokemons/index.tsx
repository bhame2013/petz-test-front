import { useEffect, useState } from "react";

import { useFormContext } from "react-hook-form";

import { Overlay } from "./overlay";
import { CallbackList } from "./callback-list";
import { NextImage } from "src/presentation/components";
import { InputControl } from "src/presentation/components/form";
import { makeRegisterName } from "src/presentation/components/form/helpers/make-register-name";

import { filterList, mergeFilteredOptions } from "./helpers";
import { IFilteredOption, ISearchPokemonsSelectProps } from "./interfaces";

import * as S from "./styles";

export function SearchPokemons(props: ISearchPokemonsSelectProps) {
  const [overlay, setOverlay] = useState(false);
  const [filteredList, setFilteredList] = useState<IFilteredOption[]>([]);

  const { getValues, register, setValue, setError, unregister } =
    useFormContext();

  const { listPosition, name, callback, optionsSelect } = props;

  const registerName = makeRegisterName(listPosition, name);
  const valueInput = getValues(registerName);
  const options = mergeFilteredOptions(optionsSelect, filteredList);

  function handleChange(value: string) {
    setFilteredList(filterList(value, optionsSelect) || []);

    setValue(registerName, value);
  }

  function callbackList() {
    handleChange(valueInput);

    callback();
  }

  useEffect(() => {
    if (!overlay && valueInput) {
      const itemExist = options.find(
        (option) =>
          option.label.toLocaleLowerCase() === valueInput?.toLocaleLowerCase()
      );

      if (!itemExist) {
        handleChange("");
        setError(registerName, {
          message: `Não foi possível achar o pokemon: ${valueInput}.`,
        });
      } else {
        setError(registerName, { message: "" });
      }
    }
  }, [overlay]);

  function handleDelete() {
    unregister(registerName);

    if(listPosition) {
      const items = getValues()[name];
      const removeIndexItemOfList = items?.filter((_: string, index: number) => index !== listPosition)

      setValue(name, removeIndexItemOfList)
    }

    props.handleDeletePatient(props.patientUid);
  }

  return (
    <S.CustomSelect $overlay={overlay}>
      <InputControl {...props}>
        {overlay && <Overlay setOverlay={setOverlay} />}

        <div className="container-search">
          <div>
            <input
              {...register(registerName)}
              data-testid="input-pokemon"
              placeholder={props.placeholder}
              onChange={(ev) => handleChange(ev.target.value)}
              onClick={() => setOverlay(true)}
              autoComplete="off"
            />

            {valueInput && overlay && (
              <button
                type="button"
                className="reset font-18-medium"
                onClick={() => handleChange("")}
              >
                x
              </button>
            )}

            {options && overlay && (
              <CallbackList
                callback={callbackList}
                setOverlay={setOverlay}
                handleChange={handleChange}
                options={options}
                loading={props.loading}
              />
            )}
          </div>

          {!!(listPosition && listPosition > 0) && (
            <button type="button" className="delete" onClick={handleDelete}>
               <NextImage src="/images/trash-solid.svg" />
            </button>
          )}
        </div>
      </InputControl>
    </S.CustomSelect>
  );
}
