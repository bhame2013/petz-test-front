import styled from "styled-components";

export const PageResume = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  padding: 3.2rem 0 5rem;

  .breadcrumb {
    margin-bottom: 1rem;

    a {
      color: currentColor;
    }
  }

  h2 {
    font-size: 3.2rem;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.4rem;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 0 3.7rem;
    text-align: center;

    .breadcrumb {
      margin-bottom: 1rem;
      justify-content: center;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }
`;
