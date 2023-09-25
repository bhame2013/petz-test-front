import { HttpStatusCode } from "src/data/protocols/http";
import { RemoteLoadPayment } from "src/data/usecases";

import { LoadPayment } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";

import { HttpClientSpy } from "tests/infra/mocks";
import { mockRemoteLoadPaymentResultModel } from "tests/domain/mocks";

import { Chance } from "chance";

const chance = new Chance();

type SutTypes = {
  sut: LoadPayment;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = chance.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadPayment(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteLoadPaymentResult", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = chance.url();
    const params = { generations: [1], numberPatients: 1 };

    const { sut, httpClientSpy } = makeSut(url);

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteLoadPaymentResultModel(),
    };

    await sut.load(params);

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("post");
  });

  test("Should throw NotFound if HttpClient returns 404", async () => {
    const params = { generations: [1], numberPatients: 1 };

    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const promise = sut.load(params);

    await expect(promise).rejects.toThrow(new NotFoundError());
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const params = { generations: [1], numberPatients: 1 };

    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.load(params);

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a DateResult on 200", async () => {
    const params = { generations: [1], numberPatients: 1 };

    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemoteLoadPaymentResultModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const httpResponse = await sut.load(params);

    expect(httpResponse).toEqual({
      numberPatients: httpResponse.numberPatients,
      tax: httpResponse.tax,
      total: httpResponse.total,
      subtotal: httpResponse.subtotal,
      taxValue: httpResponse.taxValue,
      taxLimit: httpResponse.taxLimit,
      unitaryPrice: httpResponse.unitaryPrice,
      taxTotal: httpResponse.taxTotal,
    });
  });
});
