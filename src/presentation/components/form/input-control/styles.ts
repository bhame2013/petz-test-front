import styled from "styled-components";

interface IInputStyleProps {
  $loading?: boolean;
}

export const InputControl = styled.div<IInputStyleProps>`
  width: 100%;
  margin-bottom: 3rem;

  input,
  select {
    border-radius: 0.8rem;
    border: 1px solid ${(props) => props.theme.grey};
    padding: 0 1.5rem;
    display: flex;
    width: 100%;
    height: 4.5rem;
    color: ${props => props.theme["grey-800"]};
  }

  input::placeholder {
    color: ${props => props.theme["grey-800"]};
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: ${(props) =>
      props.$loading ? 'url("")' : 'url("/images/arrow-bottom.png")'};
    background-position: 95% 50%;
    background-size: 18px 15px;
    background-repeat: no-repeat;
  }

  .input-content {
    position: relative;
    border-radius: 0.8rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;

    input,
    select {
      border-radius: 0.6rem;
      padding: 0 1rem;
      height: 4rem;
    }

    select {
      background-size: 17px 14px;
    }

    .input-content {
      border-radius: 0.6rem;
    }
  }
`;
