import { makeComponent, makeComponentProps } from "./make-component";

const inputValues = {
  "select-city": "65",
  "select-date": "24/09/2023",
  "select-time": "10:00:00",
  "select-region": "2",
  "input-name": "John",
  "input-surname": "Doe",
  "input-pokemon": "bulbasaur",
};

export type InputNames = keyof typeof inputValues;

const makeSut = (createAppointment: makeComponentProps = jest.fn()) => {
  const component = makeComponent(createAppointment);

  return {
    component,
    inputValues,
  };
};

export { makeSut, inputValues }