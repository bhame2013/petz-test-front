import { IOptionSelect, ISelectProps } from "src/presentation/components/form/interfaces";

export interface ISearchPokemonsSelectProps extends ISelectProps {
  callback(): void;
  patientUid: string;
  handleDeletePatient(uid: string): void
}

export interface IFilteredOption extends IOptionSelect {
    filter?: boolean;
  }
  