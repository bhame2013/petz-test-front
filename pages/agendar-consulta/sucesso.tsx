import { useRouter } from "next/router";

import {
  Layout,
  Container,
  PageResume,
  formatTimeWithPrefix,
  ResultScheduleAppointment,
} from "@/presentation";

export default function ScheduleAppointmentSucessPage() {
  const { query } = useRouter();

  const resultAppointment = {
    title: "Consulta Agendada",
    description: `Seu agendamento para dia ${query?.date}, às
    ${formatTimeWithPrefix(query?.time as string | undefined)}, para
    ${query.numberPatients || 0}x pokémons foi realizado com sucesso!`,
  };

  return (
    <Layout>
      <PageResume
        title="Sucesso"
        description="Consulta agendada com sucesso."
      />

      <Container>
        <ResultScheduleAppointment {...resultAppointment} status="sucess" />
      </Container>
    </Layout>
  );
}
