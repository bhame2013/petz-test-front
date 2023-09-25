import { HttpStatusCode } from "src/data/protocols/http";
import { RemoteLoadSpecie } from "src/data/usecases";

import { LoadSpecie } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";

import { HttpClientSpy } from "tests/infra/mocks";
import { mockRemoteSpecieModel } from "tests/domain/mocks";

import { Chance } from "chance";

const chance = new Chance();

type SutTypes = {
  sut: LoadSpecie;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadSpecie(httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteLoadRegionsListResult", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = chance.url();

    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteSpecieModel(),
    };

    await sut.load(url);

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("get");
  });

  test("Should throw NotFound if HttpClient returns 404", async () => {
    const url = chance.url();

    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.load(url);

    await expect(promise).rejects.toThrow(new NotFoundError());
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const url = chance.url();

    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.load(url);

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a SpecieResult on 200", async () => {
    const url = chance.url();

    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemoteSpecieModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const httpResponse = await sut.load(url);

    expect(httpResponse).toEqual({
      generation: httpResponse?.generation,
    });
  });
});
