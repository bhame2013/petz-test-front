import { LoadRegionsList } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";
import { HttpClient, HttpStatusCode } from "src/data/protocols/http";

export class RemoteLoadRegionsList implements LoadRegionsList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadRegionsList.Model>
  ) {}

  async loadAll() {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
