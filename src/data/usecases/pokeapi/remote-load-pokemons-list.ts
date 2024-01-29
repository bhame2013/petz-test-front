import { inject, injectable } from "inversify";

import { HttpStatusCode, type HttpClient } from "@/data";
import { LoadPokemonsList,  NotFoundError, UnexpectedError } from "@/domain";

import { InfraTypes } from "@/container/infra/types";
import { makePokeApiURL } from "@/container/infra/make-poke-api-url";

@injectable()
export class RemoteLoadPokemonsList implements LoadPokemonsList {
  constructor(
   @inject(InfraTypes.makePokeApiURL) private readonly makePokeApiURL: makePokeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: HttpClient<LoadPokemonsList.Model>
  ) {}

  async loadAll(offset: number) {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make(`pokemon?offset=${offset}&limit=20`),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
