import {
  Matcher,
  fireEvent,
  waitForOptions,
  SelectorMatcherOptions,
} from "@testing-library/react";

type findByText = (
  id: Matcher,
  options?: SelectorMatcherOptions | undefined,
  waitForElementOptions?: waitForOptions | undefined
) => Promise<HTMLElement>;

export async function clickOnSubmit({
  findByText,
}: {
  findByText: findByText;
}) {
  const buttonSubmit = await findByText("Concluir Agendamento");

  await fireEvent.submit(buttonSubmit);
}
