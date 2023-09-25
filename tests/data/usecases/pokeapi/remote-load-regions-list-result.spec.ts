import { HttpStatusCode } from "src/data/protocols/http";
import { RemoteLoadRegionsList } from "src/data/usecases";

import { LoadRegionsList } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";

import { HttpClientSpy } from "tests/infra/mocks";
import { mockRemoteRegionResultModel } from "tests/domain/mocks";

import { Chance } from "chance";

const chance = new Chance();

type SutTypes = {
  sut: LoadRegionsList;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = chance.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadRegionsList(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteLoadRegionsListResult", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = chance.url();

    const { sut, httpClientSpy } = makeSut(url);
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteRegionResultModel(),
    };

    await sut.loadAll();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("get");
  });

  test("Should throw NotFound if HttpClient returns 404", async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.loadAll();

    await expect(promise).rejects.toThrow(new NotFoundError());
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.loadAll();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a RegionResult on 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemoteRegionResultModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const httpResponse = await sut.loadAll();

    expect(httpResponse).toEqual({
      count: httpResponse?.count,
      next: httpResponse?.next,
      previous: httpResponse?.previous,
      results: httpResponse?.results,
    });
  });
});
