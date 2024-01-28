import { inject, injectable } from "inversify";

import * as data from "@/data";
import { InfraTypes, makeApiURL } from "@/container";
import { NotFoundError, UnexpectedError, LoadDateSchedule } from "@/domain";

@injectable()
export class RemoteLoadDateList implements LoadDateSchedule {
  constructor(
    @inject(InfraTypes.makeApiURL) private readonly makeApiURL: makeApiURL,
    @inject(InfraTypes.http) private readonly httpClient: data.HttpClient<LoadDateSchedule.Model>
  ) {}

  async loadAll() {
    const httpResponse = await this.httpClient.request({
      url: this.makeApiURL.make("scheduling/date"),
      method: "get",
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
