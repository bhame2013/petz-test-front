import { HttpStatusCode } from 'src/data/protocols/http'
import { RemoteLoadCitiesList } from 'src/data/usecases'

import { LoadCitiesList } from 'src/domain/usecases'
import { NoContentError, NotFoundError , UnexpectedError } from 'src/domain/errors'

import { HttpClientSpy } from 'tests/infra/mocks'
import { mockRemoteCitiesResultModel } from 'tests/domain/mocks'

import { Chance } from 'chance'

const chance = new Chance()

type SutTypes = {
  sut: LoadCitiesList;
  httpClientSpy: HttpClientSpy
}

const makeSut = (url = chance.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteLoadCitiesList(url, httpClientSpy)

  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadCitiesListResult', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = chance.url() + "/"
    const region = "1"
    const fullURL = url + region

    const { sut, httpClientSpy } = makeSut(url)
    
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteCitiesResultModel()
    }

    await sut.loadAll(region)

    expect(httpClientSpy.url).toBe(fullURL)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw NoContent if body response locations is empty', async () => {
    const region = "1"

    const { sut, httpClientSpy } = makeSut()
    
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: {...mockRemoteCitiesResultModel(), locations: [] }
    }

    const promise = sut.loadAll(region)

    await expect(promise).rejects.toThrow(new NoContentError("Não estamos atendendo nesta região no momento."))
  })


  test('Should throw NotFound if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.loadAll(chance.url())

    await expect(promise).rejects.toThrow(new NotFoundError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.loadAll(chance.url())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a CitiesResult on 200', async () => {
    const region = "1"

    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockRemoteCitiesResultModel()
    
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const httpResponse = await sut.loadAll(region)

    expect(httpResponse).toEqual({
      id: httpResponse?.id,
      name: httpResponse?.name,
      locations: httpResponse?.locations,
      pokedexes: httpResponse?.pokedexes,
      main_generation: httpResponse?.main_generation,
      version_groups: httpResponse?.version_groups,
      names: httpResponse?.names
    })
  })
})
