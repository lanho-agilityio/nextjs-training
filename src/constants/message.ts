export const ERROR_MESSAGES = {
  FIELD_REQUIRED: 'This field is required.',
  FIELD_MATCHED: (field: string) => `This field needs to match ${field}`,
  DEFAULT_API_ERROR: 'Something went wrong. Please try again later.',
  USER_EXISTED: 'This user already exists. Please log in or create another account',
  USER_NOT_FOUND: 'This user does not exist. Please sign up.',
  POST_NOT_FOUND: 'Post Not Found',
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successfully. Please continue where you left off',
  POST_CREATED: 'New post is created. Returning to Homepage',
  POST_EDITED: 'Post edited successfully. Returning to Homepage',
};
