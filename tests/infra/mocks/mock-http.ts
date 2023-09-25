import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  HttpClient,
} from "src/data/protocols/http";

import { Chance } from "chance";

const chance = new Chance();

export const mockHttpRequest = (): HttpRequest => ({
  url: chance.url(),
  method: chance.pickone(["get", "post", "put", "delete"]),
  body: chance.n(chance.word, 5),
  headers: chance.n(chance.word, 5),
});

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string;
  method?: string;
  body?: any;
  headers?: any;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url;
    this.method = data.method;
    this.body = data.body;
    this.headers = data.headers;
    return this.response;
  }
}
