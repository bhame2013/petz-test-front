import { LoadSpecie } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";
import { HttpClient, HttpStatusCode } from "src/data/protocols/http";

export class RemoteLoadSpecie implements LoadSpecie {
  constructor(
    private readonly httpClient: HttpClient<LoadSpecie.Model>
  ) {}

  async load(url: string) {
    const httpResponse = await this.httpClient.request({
      url,
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
