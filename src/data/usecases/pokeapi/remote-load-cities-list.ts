import { inject, injectable } from "inversify";

import { HttpStatusCode, type HttpClient } from "@/data";
import { NoContentError, NotFoundError, UnexpectedError,LoadCitiesList } from "@/domain";

import { InfraTypes } from "@/container/infra/types";
import { makePokeApiURL } from "@/container/infra/make-poke-api-url";

@injectable()
export class RemoteLoadCitiesList implements LoadCitiesList {
  constructor(
  @inject(InfraTypes.makePokeApiURL) private readonly makePokeApiURL: makePokeApiURL,
  @inject(InfraTypes.http) private readonly httpClient: HttpClient<LoadCitiesList.Model>
  ) {}

  async loadAll(url: string) {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make(`region/${url}`),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: 
      
      if(httpResponse.body?.locations.length === 0) {
        throw new NoContentError("Não estamos atendendo nesta região no momento.");
      }

      return httpResponse.body;

      case HttpStatusCode.notFound: throw new NotFoundError();
      
      default: throw new UnexpectedError();
    }
  }
}



