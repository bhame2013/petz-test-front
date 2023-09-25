interface Props {
  name: string;
  label?: string;
  loading?: boolean;
  listPosition?: number;
}

export interface IOptionSelect {
  label: string;
  value: string;
}

export interface CustomSelectProps extends InputProps {
  onChangeSelect?: (value: string) => void;
  optionsSelect: IOptionSelect[] | undefined;
}

export type InputProps = JSX.IntrinsicElements["input"] & Props;
export type ISelectProps = JSX.IntrinsicElements["select"] & CustomSelectProps;
