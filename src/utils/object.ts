export const isEmpty = <T>(value: T): boolean => {
  if (value && (typeof value === 'string' || Array.isArray(value))) {
    return !value.length;
  }

  if (value && typeof value === 'object') {
    return !Object.keys(value).length;
  }

  return true;
};
