import styled from "styled-components";

export const FormScheduleAppointment = styled.div`
  padding: 3.2rem 0 7rem;

  h2 {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .form-content {
    max-width: 55rem;
    width: 100%;
    margin: 0 auto;

    > div {
      display: flex;
      gap: 1.8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 0 4rem;

    h2 {
      margin-bottom: 1.4rem;
    }

    .form-content {
      max-width: 100%;

      > div {
        display: flex;
        flex-direction: column;
        gap: 0;
      }
    }
  }
`;
