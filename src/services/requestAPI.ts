import { revalidatePath, revalidateTag } from 'next/cache';
import { unstable_noStore as noStore } from 'next/cache';
import { API_BASE_URL } from '@/constants';

class API {
  async get<T>(path: string, tag: string, time?: number): Promise<{ data: T; total: number }> {
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

    const data = await response.json();
    return {
      data: data,
      total: Number(response.headers.get('x-total-count')) || 0,
    };
  }

  async post<T>(
    path: string,
    payload: object = {},
    relvalidateOptions: { tag?: string; path?: string } = { tag: '', path: '' },
  ): Promise<T> {
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

    relvalidateOptions.tag && revalidateTag(relvalidateOptions.tag);
    relvalidateOptions.path && revalidatePath(relvalidateOptions.path);
    return response.json();
  }

  async put<T>(
    path: string,
    payload: object = {},
    relvalidateOptions: { tag?: string; path?: string } = { tag: '', path: '' },
  ): Promise<T> {
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

    relvalidateOptions?.tag && revalidateTag(relvalidateOptions?.tag);
    relvalidateOptions?.path && revalidatePath(relvalidateOptions?.path);
    return response.json();
  }

  async delete<T>(
    path: string,
    relvalidateOptions: { tag?: string; path?: string } = { tag: '', path: '' },
  ): Promise<T> {
    noStore();

    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      throw new Error(error);
    });

    relvalidateOptions?.tag && revalidateTag(relvalidateOptions?.tag);
    relvalidateOptions?.path && revalidatePath(relvalidateOptions?.path);
    return response.json();
  }
}

export const APIs = new API();