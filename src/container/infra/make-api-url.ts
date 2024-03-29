import { injectable } from "inversify";

@injectable()
export class makeApiURL {
  make(path: string) {
    return `${process.env.API_URL}/${path}`;
  }
}