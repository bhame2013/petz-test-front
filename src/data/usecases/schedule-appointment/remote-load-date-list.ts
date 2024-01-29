import { inject, injectable } from "inversify";

import { HttpStatusCode, type HttpClient } from "@/data";
import { NotFoundError, UnexpectedError, LoadDateSchedule } from "@/domain";

import { InfraTypes } from "@/container/infra/types";
import { makeApiURL } from "@/container/infra/make-api-url";

@injectable()
export class RemoteLoadDateList implements LoadDateSchedule {
  constructor(
    @inject(InfraTypes.makeApiURL) private readonly makeApiURL: makeApiURL,
    @inject(InfraTypes.http) private readonly httpClient: HttpClient<LoadDateSchedule.Model>
  ) {}

  async loadAll() {
    const httpResponse = await this.httpClient.request({
      url: this.makeApiURL.make("scheduling/date"),
      method: "get",
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
