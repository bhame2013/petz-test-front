import { inject, injectable } from "inversify";

import { HttpStatusCode, type HttpClient } from "@/data";
import { LoadSpecie, NotFoundError, UnexpectedError } from "@/domain";

import { InfraTypes } from "@/container/infra/types";
import { makePokeApiURL } from "@/container/infra/make-poke-api-url";

@injectable()
export class RemoteLoadSpecie implements LoadSpecie {
  constructor(
    @inject(InfraTypes.makePokeApiURL)
    private readonly makePokeApiURL: makePokeApiURL,
    @inject(InfraTypes.http)
    private readonly httpClient: HttpClient<LoadSpecie.Model>
  ) {}

  async load(url: string) {
    const httpResponse = await this.httpClient.request({
      url: this.makePokeApiURL.make(""),
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.notFound:
        throw new NotFoundError();
      default:
        throw new UnexpectedError();
    }
  }
}
