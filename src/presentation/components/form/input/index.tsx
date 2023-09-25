import { useFormContext } from "react-hook-form";

import { InputControl } from "../input-control";
import { makeRegisterName } from "../helpers/make-register-name";

import { InputProps } from "../interfaces";

export function Input(props: InputProps) {
  const { register } = useFormContext();

  const { listPosition, name } = props;

  const registerName = makeRegisterName(listPosition, name);

  return (
    <InputControl {...props}>
      <input
        id={name}
        data-testid={"input-" + name}
        {...register(registerName)}
        {...props}
      />
    </InputControl>
  );
}
