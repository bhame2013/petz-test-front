import { LoaderCircle } from "@/presentation";

import { ICallbacklistProps } from "./interface";

import * as S from "./styles";

export function CallbackList({
  loading,
  options,
  callback,
  setOverlay,
  handleChange,
}: ICallbacklistProps) {
  
  function handleScroll(ev: any) {
    const target = ev.target;

    const isEndList = target.offsetHeight + target.scrollTop >= target.scrollHeight - 20;

    if (isEndList) {
      callback();
    }
  }

  const optionsFilter = options.filter((option) => option.filter);

  const normalOptions = options.filter((option) => !option.filter);

  function handleClickOption(value: string) {
    setOverlay(false);
    handleChange(value);
  }

  return (
    <S.CallbackList className="callback-list">
      {optionsFilter?.length > 0 && (
        <ul>
          {optionsFilter.map((option) => (
            <li
              key={option.value}
              onClick={() => handleClickOption(option.label)}
            >
              {option.filter && <div className="ball"></div>} {option.label}
            </li>
          ))}
        </ul>
      )}

      {normalOptions?.length > 0 && (
        <ul onScroll={handleScroll}>
          {normalOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleClickOption(option.label)}
            >
              {option.filter && <div className="ball"></div>} {option.label}
            </li>
          ))}

          {loading && <li className="loading"><LoaderCircle size={20}/></li>}
        </ul>
      )}
    </S.CallbackList>
  );
}
