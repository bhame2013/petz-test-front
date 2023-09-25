import Link from "next/link";

import styled from "styled-components";

interface ILogoStyleProps {
  $active: boolean;
}

export const Logo = styled(Link)<ILogoStyleProps>`
  border-radius: 50px;
  display: inline-flex;
  background-color: ${(props) => props.theme.primaryColor};
  width: ${(props) => (props.$active ? "100%" : "6.2rem")};
  overflow: hidden;
  max-width: 25.9rem;
  text-decoration: none;
  padding: 1.45rem 1.3rem;
  transition: 0.3s all ease-out;

  &:hover {
    color: transparent;
    text-decoration: underline;
  }

  .icon {
    width: 3.6rem;
    margin-right: 1.9rem;
    animation: ${(props) =>
      `${props.$active ? "rotate" : "rotateInverse"} linear 0.26s forwards`};
  }

  .word {
    opacity: ${(props) => (props.$active ? 1 : 0)};
    transition: 0.4s;
    overflow: hidden;

    p {
      color: #fff;
      min-width: max-content;
      margin: 0;
    }
  }

  @keyframes rotateInverse {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: center;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;

    .icon {
      width: 2.7rem;
      margin: 0;
    }

    .word {
      display: none;
    }
  }
`;
