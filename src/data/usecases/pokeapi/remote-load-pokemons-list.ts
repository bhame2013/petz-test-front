import { LoadPokemonsList } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";
import { HttpClient, HttpStatusCode } from "src/data/protocols/http";

export class RemoteLoadPokemonsList implements LoadPokemonsList {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClient<LoadPokemonsList.Model>
  ) {}

  async loadAll(offset: number) {
    const httpResponse = await this.httpClient.request({
      url: this.baseUrl + `?offset=${offset}&limit=20`,
      method: "get",
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.notFound: throw new NotFoundError();
      default: throw new UnexpectedError();
    }
  }
}
