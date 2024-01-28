import { inject, injectable } from "inversify";

import * as data from "@/data";
import { InfraTypes, makePokeApiURL } from "@/container";
import { LoadSpecie, NotFoundError, UnexpectedError } from "@/domain";

@injectable()
export class RemoteLoadSpecie implements LoadSpecie {
  constructor(
    @inject(InfraTypes.makePokeApiURL) private readonly makePokeApiURL: makePokeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: data.HttpClient<LoadSpecie.Model>
  ) {}

  async load(url: string) {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make(""),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case data.HttpStatusCode.ok: return httpResponse.body;
      case data.HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
