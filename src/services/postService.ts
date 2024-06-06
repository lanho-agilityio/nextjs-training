'use server';
import { revalidatePath, revalidateTag } from 'next/cache';

// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, LIMIT, PER_PAGE, ROUTES, SORTED, USER_INCLUDED, VALIDATE_TAGS } from '@/constants';

// Models
import { Post, PostCreate, SearchParams } from '@/models';

// Utils
import { generateSearchParams, isEmpty } from '@/utils';

export const queryAllPosts = async (
  params?: SearchParams,
  limit: number = PER_PAGE,
  validateTags: string[] = [],
): Promise<{ errorMessage: string; data: Post[]; total: number }> => {
  let errorMessage = '';
  const searchParams = (params && generateSearchParams(params)) || '';
  try {
    const url = `${API_ROUTES.POSTS}?${SORTED}${USER_INCLUDED}${LIMIT(limit)}${searchParams}`;
    const response = await APIs.get(url, [VALIDATE_TAGS.POSTS, ...validateTags]);

    const data = (response && (await response.json())) || [];
    const total = Number(response?.headers.get('x-total-count')) || 0;

    return {
      errorMessage,
      data,
      total,
    };
  } catch (error) {
    errorMessage = (error as Error).message || ERROR_MESSAGES.DEFAULT_API_ERROR;
    return {
      errorMessage,
      data: [],
      total: 0,
    };
  }
};

export const queryPostDetail = async (id: string): Promise<{ errorMessage: string; data: Post | null }> => {
  let errorMessage = '';
  const url = `${API_ROUTES.POSTS}/${id}?${USER_INCLUDED}`;
  try {
    const response = await APIs.get(url, [VALIDATE_TAGS.POSTS]);
    const data = response && (await response.json());
    const postDetail = isEmpty(data) ? null : data;
    return {
      errorMessage,
      data: postDetail,
    };
  } catch (error) {
    errorMessage = (error as Error).message || ERROR_MESSAGES.DEFAULT_API_ERROR;
    return {
      errorMessage,
      data: null,
    };
  }
};

export const createPost = async (values: PostCreate) => {
  let errorMessage = '';
  try {
    const response = await APIs.post<Post>(API_ROUTES.POSTS, values);

    revalidateTag(VALIDATE_TAGS.POSTS);
    return {
      data: response,
      errorMessage,
    };
  } catch (error) {
    errorMessage = (error as Error).message || ERROR_MESSAGES.DEFAULT_API_ERROR;
    return {
      errorMessage,
      data: null,
    };
  }
};

export const editPost = async (id: string, values: Post) => {
  let errorMessage = '';
  const url = `${API_ROUTES.POSTS}/${id}`;

  try {
    const response = await APIs.put<Post>(url, values);

    revalidateTag(VALIDATE_TAGS.POSTS);
    revalidatePath(ROUTES.POST_DETAIL(values.id));
    return {
      data: response,
      errorMessage,
    };
  } catch (error) {
    errorMessage = (error as Error).message || ERROR_MESSAGES.DEFAULT_API_ERROR;
    return {
      errorMessage,
      data: null,
    };
  }
};
