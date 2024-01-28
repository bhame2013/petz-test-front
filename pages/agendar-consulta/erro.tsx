import { useRouter } from "next/router";

import { Layout, Container, PageResume, ResultScheduleAppointment } from "@/presentation"

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
