import {
  Matcher,
  fireEvent,
  MatcherOptions,
  waitForOptions,
} from "@testing-library/react";

import { InputNames, makeSut } from "../sut";

interface IFillFormProps {
  findByTestId: (
    id: Matcher,
    options?: MatcherOptions | undefined,
    waitForElementOptions?: waitForOptions | undefined
  ) => Promise<HTMLElement>;
  excludeValueOf?: InputNames[];
}

const inputValues = makeSut().inputValues

export async function fillForm({
  findByTestId,
  excludeValueOf,
}: IFillFormProps) {
  Object.keys(inputValues).forEach(async (input) => {
    const inputKey = input as InputNames;

    if (excludeValueOf?.includes(inputKey)) {
      return;
    }

    const inputElement = await findByTestId(inputKey);
    const value = inputValues[input as InputNames];

    fireEvent.change(inputElement, { target: { value } });
  });
}
