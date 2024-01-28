import { act, render } from "@testing-library/react";

import { makeSut } from "./sut";
import { hooks } from "./mock-hooks";
import { fillForm, clickOnSubmit } from "./helpers";

jest.mock("src/presentation/hooks/schedule-appointment", () => hooks);

describe("FormScheduleAppointment tests", () => {
  let component: any;
  let inputValues: any;

  beforeEach(() => {
    const sut = makeSut();
    component = sut.component;
    inputValues = sut.inputValues;
  });

  test("Should render the form correctly", async () => {
    const { findByTestId, findByText } = render(component);

    await fillForm({ findByTestId });

    for (const input of Object.keys(inputValues)) {
      const inputElement = await findByTestId(input);
      expect(inputElement).toBeInTheDocument();
    }
    
    await clickOnSubmit({ findByText })
  });

  test("Should show error if name is not filled", async () => {
    const { findByText, findByTestId } = render(component);

    await fillForm({ findByTestId, excludeValueOf: ["input-name"] });

    await clickOnSubmit({ findByText })

    const errorMessage = await findByText("Preencha seu nome.");

    expect(errorMessage).toBeInTheDocument();
  });

  test("Should show error if surname is not filled", async () => {
    const { findByText, findByTestId } = render(component);

    await fillForm({ findByTestId, excludeValueOf: ["input-surname"] });

    await clickOnSubmit({ findByText })

    const errorMessage = await findByText("Preencha seu sobrenome.");

    expect(errorMessage).toBeInTheDocument();
  });

  test("Should show error if region is not filled", async () => {
    const { findByText, findByTestId } = render(component);

    await fillForm({ findByTestId, excludeValueOf: ["select-region"] });

    await clickOnSubmit({ findByText })

    const errorMessage = await findByText("Preencha sua região.")

    expect(errorMessage).toBeInTheDocument();
  });

  test("Should show error if city is not filled", async () => {
    const { findByText, findByTestId } = render(component);

    await fillForm({ findByTestId, excludeValueOf: ["select-city"] });

    await clickOnSubmit({ findByText })

    expect(await findByText("Preencha sua cidade.")).toBeInTheDocument();
  });

  test("Should show error if pokémon is not filled", async () => {
    const { findByText, findByTestId } = render(component);

    await fillForm({ findByTestId, excludeValueOf: ["input-pokemon"] });

    await clickOnSubmit({ findByText })

    const errorMessage = await findByText("Selecione o Pokémon desejado.");

    expect(errorMessage).toBeInTheDocument();
  });

  test("Should show error if date is not filled", async () => {
    const { findByText, findByTestId } = render(component);

    await fillForm({ findByTestId, excludeValueOf: ["select-date"] });

    await clickOnSubmit({ findByText })

    const errorMessage = await findByText("Preencha a data.");

    expect(errorMessage).toBeInTheDocument();
  });

  test("Should show error if time is not filled", async () => {
    const { findByText, findByTestId } = render(component);

    await fillForm({
      findByTestId,
      excludeValueOf: ["select-time"],
    });

    await clickOnSubmit({ findByText })

    const errorMessage = await findByText("Preencha a hora.");

    expect(errorMessage).toBeInTheDocument();
  });

  test("submits the form correctly", async () => {
    const createAppointment = jest.fn();

    const { findByText, findByTestId } = render(makeSut(createAppointment).component);

    await fillForm({ findByTestId });

    await act(async () => {
      await clickOnSubmit({ findByText })
    });

    expect(createAppointment).toBeCalledWith({
      name: inputValues["input-name"],
      city: inputValues["select-city"],
      date: inputValues["select-date"],
      patients: [inputValues["input-pokemon"]],
      region: inputValues["select-region"],
      surname: inputValues["input-surname"],
      time: inputValues["select-time"],
    });
  });
});
