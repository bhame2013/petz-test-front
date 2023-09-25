import { LoaderCircle } from "src/presentation/components";

import * as S from "./styles"

export function LoaderInput() {
    return <S.LoaderInput>
        <LoaderCircle size={20} color="#bbb9b9" />
    </S.LoaderInput>
}