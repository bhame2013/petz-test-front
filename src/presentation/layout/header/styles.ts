import styled from "styled-components";

export const Header = styled.header`
  padding: 20px 0;
  background-color: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div:last-child {
      display: flex;
      align-items: center;
      gap: 30px;

      .link {
        color: #000;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 15px 0;

    .container {
      > div:last-child {
        gap: 7px;

        [class*="font-14"] {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
