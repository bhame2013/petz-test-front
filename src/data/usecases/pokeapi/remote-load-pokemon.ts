import { LoadPokemon } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";
import { HttpClient, HttpStatusCode } from "src/data/protocols/http";

export class RemoteLoadPokemon implements LoadPokemon {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClient<LoadPokemon.Model>
  ) {}

  async load(url: string) {
    const httpResponse = await this.httpClient.request({
      url: this.baseUrl + url,
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
