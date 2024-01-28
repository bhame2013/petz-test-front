import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CreateAppointment } from "@/domain";

const appointmentSchema: ZodType<CreateAppointment.Params> = z.object({
  date: z.string().min(1, { message: "Preencha a data." }),
  time: z.string().min(1, { message: "Preencha a hora." }),
  name: z.string().min(1, { message: "Preencha seu nome." }),
  city: z.string().min(1, { message: "Preencha sua cidade." }),
  region: z.string().min(1, { message: "Preencha sua região." }),
  surname: z.string().min(1, { message: "Preencha seu sobrenome." }),
  patients: z.array(z.string().min(1, { message: "Selecione o Pokémon desejado." })).min(1, { message: "Escolha pelo menos um Pokémon."}),
});

export const resolver = zodResolver(appointmentSchema);