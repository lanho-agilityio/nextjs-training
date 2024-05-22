// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, SORTED, USER_INCLUDED, VALIDATE_TAGS } from '@/constants';

// Models
import { Post, SearchParams } from '@/models';

// Utils
import { generateSearchParams } from '@/utils';

export const queryAllPosts = async (params?: SearchParams) => {
  let errorMessage = '';
  let total = 0;
  let data: Post[] = [];
  const searchParams = (params && generateSearchParams(params)) || '';
  const url = `${API_ROUTES.POSTS}?${SORTED}${USER_INCLUDED}${searchParams}`;
  await APIs.get<Post[]>(url, VALIDATE_TAGS.POSTS)
    .then((results) => {
      data = results.data;
      total = results.total;
    })
    .catch((error) => {
      errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
    });

  return {
    errorMessage,
    data,
    total,
  };
};

export const queryPostDetail = async (id: string) => {
  let errorMessage = '';
  let data = {} as Post;
  const url = `${API_ROUTES.POSTS}/${id}?${USER_INCLUDED}`;
  await APIs.get<Post>(url, VALIDATE_TAGS.POSTS)
    .then((results) => {
      data = results.data;
    })
    .catch((error) => {
      errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
    });

  return {
    errorMessage,
    data,
  };
};
