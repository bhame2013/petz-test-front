import { Footer } from "./footer";
import { Header } from "./header";

import * as S from "./styles";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Layout>
      <Header />

      <div className="page-content">{children}</div>

      <Footer />
    </S.Layout>
  );
}
