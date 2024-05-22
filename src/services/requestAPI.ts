import { revalidateTag } from 'next/cache';
import { unstable_noStore as noStore } from 'next/cache';
import { API_BASE_URL } from '@/constants';
class API {
  async get<T>(path: string, tag: string, time?: number): Promise<T> {
    console.log(`${API_BASE_URL}${path}`);

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'GET',
      next: {
        tags: [tag],

        // Re-validate every minute
        revalidate: time || 60,
      },
    }).catch((error) => {
      throw new Error(error);
    });

    return response.json();
  }

  async post<T>(path: string, payload: object = {}, tag?: string): Promise<T> {
    noStore();

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

    tag && revalidateTag(tag);
    return response.json();
  }

  async put<T>(path: string, payload: object = {}, tag?: string): Promise<T> {
    noStore();

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    }).catch((error) => {
      throw new Error(error);
    });

    tag && revalidateTag(tag);
    return response.json();
  }

  async delete<T>(path: string, tag?: string): Promise<T> {
    noStore();

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      throw new Error(error);
    });

    tag && revalidateTag(tag);
    return response.json();
  }
}

export const APIs = new API();
