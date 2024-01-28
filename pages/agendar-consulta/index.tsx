import { useRouter } from "next/router";

import { Layout } from "src/presentation/layout";
import { CreateAppointment } from "src/domain/usecases";
import { Container, PageResume } from "@/presentation";
import { useCreateAppointment } from "src/presentation/hooks/schedule-appointment";
import { FormScheduleAppointment } from "src/presentation/pages/schedule-appointment";

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
