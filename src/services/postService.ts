'use server'
// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, LIMIT, SORTED, USER_INCLUDED, VALIDATE_TAGS } from '@/constants';

// Models
import { Post, PostCreate, SearchParams } from '@/models';

// Utils
import { generateSearchParams } from '@/utils';

export const queryAllPosts = async (params?: SearchParams) => {
  let errorMessage = '';
  const searchParams = (params && generateSearchParams(params)) || '';
  const url = `${API_ROUTES.POSTS}?${SORTED}${USER_INCLUDED}${LIMIT}${searchParams}`;
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
  await APIs.post(API_ROUTES.POSTS, values, {tag: VALIDATE_TAGS.POSTS});
};

export const editPost = async (values: Post) => {
  await APIs.put(API_ROUTES.POSTS, values, {tag: VALIDATE_TAGS.POSTS});
};

