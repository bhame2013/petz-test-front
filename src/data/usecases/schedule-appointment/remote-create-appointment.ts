import { inject, injectable } from "inversify";

import * as data from "@/data";
import { InfraTypes, makeApiURL } from "@/container";
import { CreateAppointment, NotFoundError, UnexpectedError } from "@/domain";

@injectable()
export class RemoteCreateAppointment implements CreateAppointment {
  constructor(
    @inject(InfraTypes.makeApiURL) private readonly makeApiURL: makeApiURL,
    @inject(InfraTypes.http) private readonly httpClient: data.HttpClient<CreateAppointment.Model>
  ) {}

  async create(body: CreateAppointment.Params) {
    const httpResponse = await this.httpClient.request({
      url: this.makeApiURL.make("scheduling/create"),
      method: "post",
      body,
    });

    switch (httpResponse.statusCode) {
      case data.HttpStatusCode.ok:
        if (!httpResponse.body) {
          throw new UnexpectedError();
        }

        return httpResponse.body;

      case data.HttpStatusCode.notFound:
        throw new NotFoundError();

      default:
        throw new UnexpectedError();
    }
  }
}
