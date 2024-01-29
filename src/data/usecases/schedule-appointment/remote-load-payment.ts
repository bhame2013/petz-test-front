import { inject, injectable } from "inversify";

import { HttpStatusCode, type HttpClient } from "@/data";
import { NotFoundError, UnexpectedError, LoadPayment } from "@/domain";

import { InfraTypes } from "@/container/infra/types";
import { makeApiURL } from "@/container/infra/make-api-url";

@injectable()
export class RemoteLoadPayment implements LoadPayment {
  constructor(
   @inject(InfraTypes.makeApiURL) private readonly makeApiURL: makeApiURL,
   @inject(InfraTypes.http) private readonly httpClient: HttpClient<LoadPayment.Model>
  ) {}

  async load(body: LoadPayment.Params) {
    const httpResponse = await this.httpClient.request({
      url: this.makeApiURL.make("scheduling/payment"),
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
