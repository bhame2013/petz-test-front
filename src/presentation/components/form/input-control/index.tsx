import { Error } from "src/presentation/components";

import { Label } from "./label";
import { ErrorMessage } from "./error";
import { LoaderInput } from "./loader-input";

import { InputProps } from "../interfaces";

import * as S from "./styles";

export function InputControl({
  name,
  label,
  loading,
  children,
  listPosition,
}: InputProps) {
  return (
    <Error name={`input-control-${name}`}>
      <S.InputControl $loading={loading} className="select">
        <Label inputId={name} label={label} />

        <div className="input-content">
          {loading && <LoaderInput />}

          <div className="font-14-medium">{children}</div>
        </div>

        <ErrorMessage name={name} listPosition={listPosition} />
      </S.InputControl>
    </Error>
  );
}
