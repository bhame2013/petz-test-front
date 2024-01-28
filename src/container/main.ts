import { Container } from "inversify";

import { infraContainer } from "./infra";
import { pokeApiContainer } from "./pokeapi";
import { scheduleAppointmentContainer } from "./schedule-appointment";

const container = Container.merge(infraContainer, pokeApiContainer, scheduleAppointmentContainer);

export { container };
