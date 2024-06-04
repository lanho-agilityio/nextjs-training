// APIs
import { APIs } from './requestAPI';

// Constants
import { API_ROUTES, ERROR_MESSAGES, VALIDATE_TAGS } from '@/constants';

export const queryAllCategory = async () => {
  let errorMessage = '';
  const url = `${API_ROUTES.TAGS}`;
  try {
    const response = await APIs.get(url, [VALIDATE_TAGS.TAGS]).catch((error) => {
      errorMessage = error || ERROR_MESSAGES.DEFAULT_API_ERROR;
    });

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
