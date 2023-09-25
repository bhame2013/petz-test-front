import { CreateAppointment } from "src/domain/usecases";
import {
  NotFoundError,
  UnexpectedError,
} from "src/domain/errors";
import { HttpClient, HttpStatusCode } from "src/data/protocols/http";

export class RemoteCreateAppointment implements CreateAppointment {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<CreateAppointment.Model>
  ) {}

  async create(body: CreateAppointment.Params) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        if(!httpResponse.body) {
          throw new UnexpectedError();
        }

        return httpResponse.body;

      case HttpStatusCode.notFound:
        throw new NotFoundError();
        
      default:
        throw new UnexpectedError();
    }
  }
}
