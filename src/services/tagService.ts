// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, VALIDATE_TAGS } from '@/constants';

// Models
import { PostTag } from '@/models';

export const queryAllTags = async () => {
  let errorMessage = '';
  let data: PostTag[] = [];

  const url = `${API_ROUTES.TAGS}`;
  await APIs.get<PostTag[]>(url, VALIDATE_TAGS.TAGS)
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
