import axios, { AxiosResponse } from "axios";

import { HttpRequest, HttpResponse, HttpClient } from "src/data/protocols/http";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    try {
      const axiosResponse: AxiosResponse = await axios.request({
        ...data,
        data: data.body,
      });

      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data,
      };
    } catch (error: any) { 
      if (!error.response) {
        console.error('An unexpected error occurred:', error);

        return {
          statusCode: 500,
          body: { message: 'An unexpected error occurred' },
        };
      }

      return {
        statusCode: error.response.status,
        body: error.response.data,
      };
    }
  }
}

