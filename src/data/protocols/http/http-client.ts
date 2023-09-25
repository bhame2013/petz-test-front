export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export enum HttpStatusCode {
  ok = 200,
  notFound = 404,
  noContent = 204,
  forbidden = 403,
  badRequest = 400,
  serverError = 500,
  unauthorized = 401,
}

export type HttpResponse<T = any> = {
  body?: T 
  statusCode: HttpStatusCode
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R | undefined>>
}


