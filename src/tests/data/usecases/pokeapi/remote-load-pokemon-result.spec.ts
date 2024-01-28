import { HttpStatusCode } from "src/data/protocols/http";
import { RemoteLoadPokemon } from "src/data/usecases";

import { LoadPokemon } from "src/domain/usecases";
import { NotFoundError, UnexpectedError } from "src/domain/errors";

import { HttpClientSpy } from "tests/infra/mocks";
import { mockRemotePokemonResultModel } from "tests/domain/mocks";

import { Chance } from "chance";

const chance = new Chance();

type SutTypes = {
  sut: LoadPokemon;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = chance.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadPokemon(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteLoadPokemonResult", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = chance.url() + "/";
    const pokemonName = "Bulbasaur"

    const fullUrl = url + pokemonName

    const { sut, httpClientSpy } = makeSut(url);

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemotePokemonResultModel(),
    };

    await sut.load(pokemonName);

    expect(httpClientSpy.url).toBe(fullUrl);
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

  test("Should return a PokemonResult on 200", async () => {
    const url = chance.url();

    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemotePokemonResultModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const httpResponse = await sut.load(url);

    expect(httpResponse).toEqual({
      species: httpResponse?.species,
    });
  });
});
