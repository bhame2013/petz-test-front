import { IOptionSelect } from "@/presentation";

import { IFilteredOption } from "./interfaces";

export function mergeFilteredOptions(optionsSelect: IOptionSelect[] | undefined, filteredList: IFilteredOption[]): IFilteredOption[] {
  if (!optionsSelect) {
    return [];
  }

  const filteredOptionListWithFilterFlag = filteredList.map((item) => ({
    ...item,
    filter: true,
  }));

  const remainingOptions = optionsSelect?.filter(
    (item) =>
      !filteredList.find((filteredItem) => filteredItem.label === item.label)
  );

  return [...filteredOptionListWithFilterFlag, ...remainingOptions];
}

export function filterList(
  value: string,
  optionsSelect: IOptionSelect[] | undefined,
) {
  if(!value) {
    return []
  }
  
  return optionsSelect?.filter((option) =>
    option.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
}
