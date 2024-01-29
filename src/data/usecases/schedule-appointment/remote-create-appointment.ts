import { inject, injectable } from "inversify";

import { HttpStatusCode, type HttpClient } from "@/data";
import { CreateAppointment, NotFoundError, UnexpectedError } from "@/domain";

import { InfraTypes } from "@/container/infra/types";
import { makeApiURL } from "@/container/infra/make-api-url";

@injectable()
export class RemoteCreateAppointment implements CreateAppointment {
  constructor(
    @inject(InfraTypes.makeApiURL) private readonly makeApiURL: makeApiURL,
    @inject(InfraTypes.http) private readonly httpClient: HttpClient<CreateAppointment.Model>
  ) {}

  async create(body: CreateAppointment.Params) {
    const httpResponse = await this.httpClient.request({
      url: this.makeApiURL.make("scheduling/create"),
      method: "post",
      body,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        if (!httpResponse.body) {
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
