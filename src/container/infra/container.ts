import { Container } from "inversify";

import { AxiosHttpClient } from "@/infra";

import { InfraTypes } from "./types";
import { makeApiURL } from "./make-api-url";
import { makePokeApiURL } from "./make-poke-api-url";

const infraContainer = new Container({ autoBindInjectable: true, defaultScope: "Singleton" });

infraContainer.bind(InfraTypes.http).to(AxiosHttpClient);
infraContainer.bind(InfraTypes.makeApiURL).to(makeApiURL);
infraContainer.bind(InfraTypes.makePokeApiURL).to(makePokeApiURL);

export { infraContainer };
