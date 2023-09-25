import styled from "styled-components";

export const Footer = styled.footer`
  min-height: 7.2rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.black};
  text-align: center;

  p {
    color: #fff;
    margin: 0;
  }
`;
