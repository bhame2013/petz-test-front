import { Container } from "@/presentation";

import * as S from "./styles";

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <p className="font-14">
          Todas as marcas e ilustrações utilizadas são de seus resepctivos
          donos.
        </p>
      </Container>
    </S.Footer>
  );
}
