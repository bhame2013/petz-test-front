import { IFilteredOption } from "../interfaces";

export interface ICallbacklistProps {
  callback(): void;
  options: IFilteredOption[];
  loading?: boolean | undefined;
  handleChange(value: string): void;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>
}
