import * as S from "./styles"

export function Container({ children }: { children: React.ReactNode }) {

    return <S.Container className="container">
        {children}
    </S.Container>
}