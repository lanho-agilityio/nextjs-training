import { API_ROUTES, ERROR_MESSAGES, SORTED, USER_INCLUDED, VALIDATE_TAG } from '@/constants';
import { APIs } from './requestAPI';
import { Post } from '@/models';

export const queryAllPosts = async () => {
  let errorMessage = '';
  let data: Post[] = [];
  const url = `${API_ROUTES.POSTS}?${SORTED}${USER_INCLUDED}`;
  await APIs.get<Post[]>(url, VALIDATE_TAG.POSTS)
    .then((results) => {
      data = results;
    })
    .catch((error) => {
      errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
    });

  return {
    errorMessage,
    data,
  };
};
