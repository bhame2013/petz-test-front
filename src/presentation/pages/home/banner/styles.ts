import styled from "styled-components";

export const Banner = styled.div`
  position: relative;
  height: calc(100vh - 102px - 72px);
  min-height: 300px;

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: inherit;
    height: inherit;
    z-index: 1;
  }

  .container {
    min-height: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 2;
    position: relative;

    h1 {
      max-width: 510px;
      color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 64px - 70px);
  }
`;
