import { useRouter } from "next/router";

import { CreateAppointment } from "@/domain";
import { Layout, Container, PageResume, useCreateAppointment, FormScheduleAppointment } from "@/presentation";

export default function ScheduleAppointmentPage() {
  const { create } = useCreateAppointment()

  const router = useRouter()

  async function createAppointment(data: CreateAppointment.Params) {
    try {
      const response = await create(data)

      router.push({
        pathname: "/agendar-consulta/sucesso",
        query: { ...response },
      });
    } catch (err) {
      if (err instanceof Error) {
        router.push({
          pathname: "/agendar-consulta/erro",
          query: { errorMessage: err.message },
        });
      }
    }
  }

  return (
    <Layout>
      <PageResume
        title="Agendar Consulta"
        description="Recupere seus pokémons em 5 segundos"
      />

      <Container>
        <FormScheduleAppointment createAppointment={createAppointment}/>
      </Container>
    </Layout>
  );
}
