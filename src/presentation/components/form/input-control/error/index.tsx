import { useCallback } from "react";
import { GlobalError, useFormContext } from "react-hook-form";

import { IErrorMessageProps } from "./interfaces";

import * as S from "./styles";

export function ErrorMessage({ name, listPosition }: IErrorMessageProps) {
  const { formState } = useFormContext();

  const getErrorMessage = useCallback(() => {
    const errorPath = formState.errors[name];

    const fieldIsPartOfListValidations = listPosition !== undefined && Array.isArray(errorPath);

    const path: GlobalError = fieldIsPartOfListValidations ? errorPath[listPosition] : errorPath;

    return path?.message;
  }, [formState.errors]);

  const errorMessage = getErrorMessage()

  if (!errorMessage) {
    return <></>;
  }

  return (
    <S.ErrorMessage className="error-message">
      <span className="font-12-medium">{errorMessage}</span>
    </S.ErrorMessage>
  );
}
