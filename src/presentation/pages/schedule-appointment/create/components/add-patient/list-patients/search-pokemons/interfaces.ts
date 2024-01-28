import { IOptionSelect, ISelectProps } from "@/presentation";

export interface ISearchPokemonsSelectProps extends ISelectProps {
  callback(): void;
  patientUid: string;
  handleDeletePatient(uid: string): void
}

export interface IFilteredOption extends IOptionSelect {
    filter?: boolean;
  }
  