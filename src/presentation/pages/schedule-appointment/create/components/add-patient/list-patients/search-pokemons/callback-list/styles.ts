import styled from "styled-components";

export const CallbackList = styled.div`
  display: flex;
  position: absolute;
  top: 45px;
  left: 0;
  height: 200px;
  z-index: 3;
  width: 100%;
  background-color: #fff;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  ul {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 25px;

    li {
      padding: 7px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;

      .ball {
        height: 6px;
        width: 6px;
        background-color: ${(props) => props.theme.primaryColor};
        border-radius: 100%;
        margin-right: 5px;
        margin-top: 2px;
      }

      &:hover {
        background-color: #f1f1f1;
      }
    }

    .loading {
      &:hover {
        background-color: transparent;
      }

      svg {
        stroke: ${(props) => props.theme.primaryColor};
      }
    }
  }

  ul::-webkit-scrollbar {
    width: 3px;
    border-radius: 0.8rem;
  }

  ul::-webkit-scrollbar-track {
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.primaryColor + "5a"};
  }

  ul::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primaryColor};
    border-radius: 0.8rem;
  }

  ul:first-child {
    min-width: 40%;
    width: 60%;
  }

  ul:last-child {
    width: 100%;
  }
`;
