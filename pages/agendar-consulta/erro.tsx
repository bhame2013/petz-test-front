import { useRouter } from "next/router";

import { Layout } from "src/presentation/layout";
import { Container, PageResume } from "src/presentation/components";
import { ResultScheduleAppointment } from "src/presentation/pages/schedule-appointment";

export default function ScheduleAppointmentErrorPage() {

  const { query } = useRouter();

  const resultAppointment = {
    title: "Houve um problema no agendamento",
    description: (query.errorMessage || "") as string,
  };

  return (
    <Layout>
      <PageResume
        title="Erro ao agendar consulta"
        description=""
      />

      <Container>
        <ResultScheduleAppointment {...resultAppointment} status="error" />
      </Container>
    </Layout>
  );
}
