import { HttpStatusCode } from "src/data/protocols/http";
import { RemoteLoadTimeList } from "src/data/usecases";

import { LoadTimeSchedule } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";

import { HttpClientSpy } from "tests/infra/mocks";
import { mockRemoteLoadTimeListResultModel } from "tests/domain/mocks";

import { Chance } from "chance";

const chance = new Chance();

type SutTypes = {
  sut: LoadTimeSchedule;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = chance.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadTimeList(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteLoadTimeListResult", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = chance.url();
    const params = { date: "21/09/2023" }

    const { sut, httpClientSpy } = makeSut(url);

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteLoadTimeListResultModel(),
    };

    await sut.loadAll(params);

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("post");
  });

  test("Should throw NotFound if HttpClient returns 404", async () => {
    const params = { date: "21/09/2023" }
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.loadAll(params);

    await expect(promise).rejects.toThrow(new NotFoundError());
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const params = { date: "21/09/2023" }

    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.loadAll(params);

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a TimeResult on 200", async () => {
    const params = { date: "21/09/2023" }

    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemoteLoadTimeListResultModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const httpResponse = await sut.loadAll(params);

    expect(httpResponse).toEqual(httpResponse);
  });
});
