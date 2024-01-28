import { inject, injectable } from "inversify";

import * as data from "@/data";
import { InfraTypes, makeApiURL } from "@/container";
import { NotFoundError, UnexpectedError, LoadPayment } from "@/domain";

@injectable()
export class RemoteLoadPayment implements LoadPayment {
  constructor(
   @inject(InfraTypes.makeApiURL) private readonly makeApiURL: makeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: data.HttpClient<LoadPayment.Model>
  ) {}

  async load(body: LoadPayment.Params) {
    const httpResponse = await this.httpClient.request({
      url: this.makeApiURL.make("scheduling/payment"),
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
