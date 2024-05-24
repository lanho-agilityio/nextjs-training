export const ERROR_MESSAGES = {
  FIELD_REQUIRED: 'This field is required.',
  FIELD_MATCHED: (field: string) => `This field needs to match ${field}`,
  DEFAULT_API_ERROR: 'Something went wrong. Please try again later.',
  USER_EXISTED: 'This user already exists. Please log in or create another account',
  USER_NOT_FOUND: 'This user does not exist. Please sign up.',
};

export const SUCCESS_MESSAGES = {
  POST_CREATED: 'New post is created. Returning to Homepage'
}