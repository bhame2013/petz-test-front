import { Container, NextImage } from "@/presentation";

import * as S from "./styles";

export function Banner() {
  return (
    <S.Banner>
      <div className="background">
        <NextImage src="/images/home/banner.jpg" />
      </div>

      <Container>
        <h1 className="font-32">Cuidamos bem do seu pokémon, para ele cuidar bem de você</h1>
      </Container>
    </S.Banner>
  );
}
