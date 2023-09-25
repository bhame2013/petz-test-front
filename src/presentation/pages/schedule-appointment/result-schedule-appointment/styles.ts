import styled from "styled-components";

export const ScheduleAppointmentSucess = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .sucess {
    max-width: 410px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #df8686;
    background: rgba(223, 134, 134, 0.04);
    text-align: center;
    padding: 20px 20px 35px;

    h3 {
      margin-bottom: 20px;
    }

    svg {
      margin-bottom: 15px;
    }

    p {
      color: ${(props) => props.theme["grey-800"]};
      margin-bottom: 15px;
    }

    a {
      display: inline-flex;
    }
  }
`;
