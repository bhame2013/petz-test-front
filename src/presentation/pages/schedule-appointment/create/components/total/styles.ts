import styled from "styled-components";

export const Total = styled.div`
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.grey};
  padding-top: 28px;

  ul {
    li {
      display: flex;
      gap: 20px;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme["grey-800"]};
        min-height: 25px;
      }
    }

    li + li {
      margin-top: 8px;
    }
  }

  .warning {
    font-size: 10px;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    span {
      font-size: 2.4rem;
      display: flex;
      align-items: center;
      line-height: 1;
      height: fit-content;
    }
  }

  @media only screen and (max-width: 500px) {
    .bottom {
      gap: 20px;
      flex-direction: column;

      span {
        font-size: 2.2rem;
      }
    }
  }
`;
