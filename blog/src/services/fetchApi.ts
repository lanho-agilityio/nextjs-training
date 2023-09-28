//Constants
import { APP_ERRORS } from '@/constants/errors';
import { BASE_URL_API, REVALIDATE_DEFAULT_TIME } from '@/constants/fetch';
//Enums
import { FETCH_METHODS } from '@/enums/fetch';

export class FetchApiService {
  private readonly baseApi: string;

  constructor(baseApi: string) {
    this.baseApi = baseApi;
  }

  fetch = async (url: string, method: FETCH_METHODS) => {
    let response;
    const requestUrl = `${this.baseApi}${url}`;

    switch (method) {
      case FETCH_METHODS.SSR:
        response = await fetch(requestUrl, { cache: 'no-store' });
        break;

      case FETCH_METHODS.SSR:
        response = await fetch(requestUrl, {
          next: { revalidate: REVALIDATE_DEFAULT_TIME }
        });
        break;

      default: // SSG
        response = await fetch(requestUrl, {
          cache: 'force-cache'
        });
        break;
    }

    if (!response.ok) {
      throw new Error(APP_ERRORS.DEFAULT_ERROR_APIS);
    }

    return response.json();
  };

  post = async <T>(requestData: T, url: string): Promise<T> => {
    const requestUrl = `${this.baseApi}${url}`;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };

    const response = await fetch(requestUrl, config);
    if (response.ok) {
      return response.json();
    }

    throw new Error(APP_ERRORS.DEFAULT_ERROR_APIS);
  };

  delete = async <T>(id: string, url: string): Promise<T> => {
    const requestUrl = `${this.baseApi}${url}`;
    const config = {
      method: 'DELETE'
    };

    const response = await fetch(`${requestUrl}/${id}`, config);

    if (response.ok) {
      return response.json();
    }

    throw new Error(APP_ERRORS.DEFAULT_ERROR_APIS);
  };

  put = async <T>(id: string, url: string, data: T): Promise<T> => {
    const requestUrl = `${this.baseApi}${url}`;
    const response = await fetch(`${requestUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(data)
    });
    if (response.ok) {
      return response.json();
    }

    throw new Error(APP_ERRORS.DEFAULT_ERROR_APIS);
  };
}

export const FetchService = new FetchApiService(BASE_URL_API);
