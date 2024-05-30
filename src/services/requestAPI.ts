import { API_BASE_URL } from '@/constants';

class API {
  async get<T>(path: string, tag?: string, time?: number): Promise<{ data: T; total: number }> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'GET',
      next: {
        tags: tag ? [tag] : [],

        // Re-validate every minute
        revalidate: time || 60,
      },
    }).catch((error) => {
      throw new Error(error);
    });
    const data = await response.json();

    const total = Number(response.headers.get('x-total-count')) || data.length || 0;

    return {
      data,
      total,
    };
  }

  async post<T>(path: string, payload: object = {}): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
      }),
    }).catch((error) => {
      throw new Error(error);
    });
    return response.json();
  }

  async put<T>(path: string, payload: object = {}): Promise<T> {

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    }).catch((error) => {
      throw new Error(error);
    });
    return response.json();
  }

  async delete<T>(path: string): Promise<T> {

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      throw new Error(error);
    });
    return response.json();
  }
}

export const APIs = new API();
