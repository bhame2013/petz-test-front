import Link from "next/link";

import { Button, Container } from "@/presentation";

import { Logo } from "./logo";

import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <Container>
        <Logo />

        <div>
          <Link href="quem-somos" className="link font-14-regular">
            Quem Somos
          </Link>

          <Button text="Agendar Consulta" href="/agendar-consulta"  />
        </div>
      </Container>
    </S.Header>
  );
}
