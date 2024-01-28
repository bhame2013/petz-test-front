import { HttpStatusCode } from "src/data/protocols/http";
import { RemoteLoadPokemonsList } from "src/data/usecases";

import { LoadPokemonsList } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";

import { HttpClientSpy } from "tests/infra/mocks";
import { mockRemotePokemonListModel } from "tests/domain/mocks";

import { Chance } from "chance";

const chance = new Chance();

type SutTypes = {
  sut: LoadPokemonsList;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = chance.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadPokemonsList(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteLoadPokemonsListResult", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = chance.url();
    const { sut, httpClientSpy } = makeSut(url);
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemotePokemonListModel(),
    };

    const offset = 20;

    await sut.loadAll(offset);

    expect(httpClientSpy.url).toBe(url + `?offset=${offset}&limit=20`);
    expect(httpClientSpy.method).toBe("get");
  });

  test("Should throw NotFound if HttpClient returns 404", async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.loadAll(20);

    await expect(promise).rejects.toThrow(new NotFoundError());
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.loadAll(20);

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a PokemonsResult on 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemotePokemonListModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const httpResponse = await sut.loadAll(20);

    expect(httpResponse).toEqual({
      count: httpResponse?.count,
      next: httpResponse?.next,
      previous: httpResponse?.previous,
      results: httpResponse?.results,
    });
  });
});
