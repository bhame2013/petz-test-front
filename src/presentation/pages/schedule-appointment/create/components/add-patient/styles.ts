import styled from "styled-components";

export const AddPatient = styled.div`
  flex-direction: column;
  gap: 0 !important;
  margin-bottom: 3rem;

  h3 {
    margin-bottom: 0.4rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  .select {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    label {
      width: 100px;
      margin-bottom: 0;
    }

    .input-content {
      width: calc(100% - 100px);
    }

    .error-message {
      width: calc(100% - 100px);
      margin-left: auto;
      display: flex;
    }
  }

  .add {
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.black};
    padding: 0 15px;
    height: 42px;
    background-color: #fff;
    color: ${(props) => props.theme.black};
    display: inline-flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    transition: 0.25s;

    &:hover {
      background-color: ${(props) => props.theme.black};
      color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;

    .select {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      label {
        width: auto;
        display: inline-flex;
      }

      .input-content {
        width: 100%;
      }

      .error-message {
        width: 100%;
      }
    }

    .add {
      transition: 0.25s;
      height: 38px;
      
      .icon {
        font-size: 15px;
      }
    }
  }
`;
