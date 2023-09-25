import Link from "next/link";

import { variants } from "./variants";
import { IButtonProps } from "./interfaces";

import * as S from "./styles";

export function Button({
  text,
  href,
  disabled,
  type = "submit",
  variant = "default",
}: IButtonProps) {

  const className = "font-14-bold"

  return (
    <S.Button $variant={variants[variant]}>
      {href ? (
        <Link href={href} className={className}>{text}</Link>
      ) : (
        <button type={type} className={className} disabled={disabled}>{text}</button>
      )}
    </S.Button>
  );
}
