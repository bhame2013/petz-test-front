import styled from "styled-components";

interface ICustomSelectStyleProps {
  $overlay: boolean;
}

export const CustomSelect = styled.div<ICustomSelectStyleProps>`
  position: relative;
  z-index: ${(props) => (props.$overlay ? "2" : "1")};

  .overlay {
    position: absolute;
    top: 0;
    left: -200vw;
    width: 300vw;
    z-index: 10;
  }

  input {
    position: relative;
    z-index: 11;
    border-bottom-left-radius: ${(props) => (props.$overlay ? "0" : "0.8rem")};
    border-bottom-right-radius: ${(props) => (props.$overlay ? "0" : "0.8rem")};
  }

  .callback-list {
    z-index: 11;
  }

  .delete {
    z-index: 11;
    background-color: transparent;
    border: 0;
    width: 13px;
    cursor: pointer;
  }

  .reset {
    z-index: 12;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    border: 0;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }

  .reset:hover {
    color: ${(props) => props.theme.primaryColor};
  }

  .container-search {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;

    > div {
      width: 100%;
      position: relative;
    }
  }
`;
