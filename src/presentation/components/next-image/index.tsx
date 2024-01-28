import Image from "next/image";

import { Error } from "@/presentation";

import { INextImageProps } from "./interfaces";

import * as S from "./styles";

export function NextImage({ src = "", alt = "" }: INextImageProps) {
  return (
    <Error name="next-image">
      <S.Image>
        <Image src={src} alt={alt || src} fill />
      </S.Image>
    </Error>
  );
}
