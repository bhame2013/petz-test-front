import { inject, injectable } from "inversify";

import * as data from "@/data";
import { InfraTypes, makePokeApiURL } from "@/container";
import { LoadPokemonsList,  NotFoundError, UnexpectedError } from "@/domain";

@injectable()
export class RemoteLoadPokemonsList implements LoadPokemonsList {
  constructor(
   @inject(InfraTypes.makePokeApiURL) private readonly makePokeApiURL: makePokeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: data.HttpClient<LoadPokemonsList.Model>
  ) {}

  async loadAll(offset: number) {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make(`pokemon?offset=${offset}&limit=20`),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case data.HttpStatusCode.ok: return httpResponse.body;
      case data.HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
