import { Breadcrumb, Container } from "@/presentation";

import { IPageResume } from "./interfaces";

import * as S from "./styles";

export function PageResume({ title, description }: IPageResume) {
  return (
    <S.PageResume>
      <Container>
        <Breadcrumb />

        <h2>{title}</h2>

        <p>{description}</p>
      </Container>
    </S.PageResume>
  );
}
