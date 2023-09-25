import { useFormContext } from "react-hook-form";

import { InputControl } from "../input-control";
import { makeRegisterName } from "../helpers/make-register-name";

import { ISelectProps } from "../interfaces";

export default function Select(props: ISelectProps) {
  const { register } = useFormContext();

  const { listPosition, name, placeholder, optionsSelect } = props;

  const registerName = makeRegisterName(listPosition, name);

  return (
    <InputControl {...props}>
      <select data-testid={"select-" + name} {...register(registerName)}>
        <option value="">{placeholder}</option>

        {optionsSelect?.map((option) => (
          <option key={option.value + listPosition} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </InputControl>
  );
}
