import { inject, injectable } from "inversify";

import * as data from "@/data";
import { InfraTypes, makePokeApiURL } from "@/container";
import { NoContentError, NotFoundError, UnexpectedError,LoadCitiesList } from "@/domain";

@injectable()
export class RemoteLoadCitiesList implements LoadCitiesList {
  constructor(
  @inject(InfraTypes.makePokeApiURL) private readonly makePokeApiURL: makePokeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: data.HttpClient<LoadCitiesList.Model>
  ) {}

  async loadAll(url: string) {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make(`/region/${url}`),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case data.HttpStatusCode.ok: 
      
      if(httpResponse.body?.locations.length === 0) {
        throw new NoContentError("Não estamos atendendo nesta região no momento.");
      }

      return httpResponse.body;

      case data.HttpStatusCode.notFound: throw new NotFoundError();
      
      default: throw new UnexpectedError();
    }
  }
}



