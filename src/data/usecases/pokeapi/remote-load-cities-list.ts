import { LoadCitiesList } from "src/domain/usecases";
import { NoContentError, NotFoundError, UnexpectedError } from "src/domain/errors";
import { HttpClient, HttpStatusCode } from "src/data/protocols/http";

export class RemoteLoadCitiesList implements LoadCitiesList {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClient<LoadCitiesList.Model>
  ) {}

  async loadAll(url: string) {
    const httpResponse = await this.httpClient.request({
      url: this.baseUrl + url,
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



