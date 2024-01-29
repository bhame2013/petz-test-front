import { inject, injectable } from "inversify";

import { HttpStatusCode, type HttpClient } from "@/data";
import { NotFoundError, UnexpectedError, LoadRegionsList } from "@/domain";

import { InfraTypes } from "@/container/infra/types";
import { makePokeApiURL } from "@/container/infra/make-poke-api-url";

@injectable()
export class RemoteLoadRegionsList implements LoadRegionsList {
  constructor(
    @inject(InfraTypes.makePokeApiURL) private readonly makePokeApiURL: makePokeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: HttpClient<LoadRegionsList.Model>
  ) {}

  async loadAll() {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make("region"),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
