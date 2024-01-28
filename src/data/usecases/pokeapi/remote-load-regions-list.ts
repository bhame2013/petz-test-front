import { inject, injectable } from "inversify";

import * as data from "@/data";
import { InfraTypes, makePokeApiURL } from "@/container";
import { NotFoundError, UnexpectedError, LoadRegionsList } from "@/domain";

@injectable()
export class RemoteLoadRegionsList implements LoadRegionsList {
  constructor(
    @inject(InfraTypes.makePokeApiURL) private readonly makePokeApiURL: makePokeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: data.HttpClient<LoadRegionsList.Model>
  ) {}

  async loadAll() {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make("region"),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case data.HttpStatusCode.ok: return httpResponse.body;
      case data.HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
