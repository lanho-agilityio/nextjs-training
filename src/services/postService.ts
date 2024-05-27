'use server';
import { revalidatePath, revalidateTag } from 'next/cache';

// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, LIMIT, PER_PAGE, ROUTES, SORTED, USER_INCLUDED, VALIDATE_TAGS } from '@/constants';

// Models
import { Post, PostCreate, SearchParams } from '@/models';

// Utils
import { generateSearchParams } from '@/utils';

export const queryAllPosts = async (params?: SearchParams, limit: number = PER_PAGE) => {
  let errorMessage = '';
  const searchParams = (params && generateSearchParams(params)) || '';
  const url = `${API_ROUTES.POSTS}?${SORTED}${USER_INCLUDED}${LIMIT(limit)}${searchParams}`;
  const response = await APIs.get<Post[]>(url, VALIDATE_TAGS.POSTS).catch((error) => {
    errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
  });
  return {
    errorMessage,
    data: response?.data || [],
    total: response?.total || 0,
  };
};

export const queryPostDetail = async (id: string) => {
  let errorMessage = '';
  const url = `${API_ROUTES.POSTS}/${id}?${USER_INCLUDED}`;
  const response = await APIs.get<Post>(url, VALIDATE_TAGS.POSTS).catch((error) => {
    errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
  });

  return {
    data: response?.data || null,
    errorMessage,
  };
};

export const createPost = async (values: PostCreate) => {
  let errorMessage = '';
  const response = await APIs.post<Post>(API_ROUTES.POSTS, values).catch((error) => {
    errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
  });
  if (!errorMessage) {
    revalidateTag(VALIDATE_TAGS.POSTS);
    return {
      data: response,
      errorMessage,
    };
  }
  return {
    data: null,
    errorMessage,
  };
};

export const editPost = async (id: string, values: Post) => {
  let errorMessage = '';
  const url = `${API_ROUTES.POSTS}/${id}`;
  const response = await APIs.put<Post>(url, values).catch((error) => {
    errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
  });
  if (!errorMessage) {
    revalidateTag(VALIDATE_TAGS.POSTS);
    revalidatePath(ROUTES.POST_DETAIL(values.id));
    return {
      data: response,
      errorMessage,
    };
  }
  return {
    data: null,
    errorMessage,
  };
};
