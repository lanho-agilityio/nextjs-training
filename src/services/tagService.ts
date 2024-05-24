// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, VALIDATE_TAGS } from '@/constants';

// Models
import { PostCategory } from '@/models';

export const queryAllCategory = async () => {
  let errorMessage = '';
  const url = `${API_ROUTES.TAGS}`;
  const response = await APIs.get<PostCategory[]>(url, VALIDATE_TAGS.TAGS).catch((error) => {
    errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
  });

  return {
    errorMessage,
    data: response?.data || [],
    total: response?.total || 0,
  };
};
