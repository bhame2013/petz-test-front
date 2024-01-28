import { injectable } from "inversify";

@injectable()
export class makePokeApiURL {
  make(path: string) {
    return `${process.env.POKE_API_URL}/${path}`;
  }
}