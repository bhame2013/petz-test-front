import styled from "styled-components";

export const AboutUs = styled.section`
  padding: 3.5rem 0 7rem;

  .container {
    max-width: 440px;
  }

  h3,
  h4,
  p {
    line-height: 1.4;
  }

  *:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 0 4rem;
  }
`;
