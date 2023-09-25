import styled from "styled-components";

import { IVariantSchema } from "./variants";

interface IButtonStyleProps {
  $variant: IVariantSchema;
}

export const Button = styled.div<IButtonStyleProps>`
  a,
  button {
    height: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2.4rem;
    color: ${(props) => props.$variant.color};
    background-color: ${(props) => props.theme[props.$variant.background]};
    border: 0;
    cursor: pointer;
    border-radius: 4rem;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 4rem;
      padding: 0 2rem;
    }
  }
`;
