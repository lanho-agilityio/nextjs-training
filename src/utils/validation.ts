// Constants
import { ERROR_MESSAGES } from '@/constants';

export const isRequired = (value: string | null | undefined): boolean => !!value;

export const validateRequired = (value: string | null | undefined): string | true =>
  isRequired(value?.trim()) || ERROR_MESSAGES.FIELD_REQUIRED;

export const validateMatched = (value: string | null | undefined, compared: string, field: string): string | true =>
  (isRequired(value?.trim()) && value === compared) || ERROR_MESSAGES.FIELD_MATCHED(field);

/**
 * 
 * @param value 
 * @returns Check if value is empty or not
 */
export const isEmpty = <T>(value: T): boolean => {
  if (value && (typeof value === 'string' || Array.isArray(value))) {
    return !value.length;
  }

  if (value && typeof value === 'object') {
    return !Object.keys(value).length;
  }

  return true;
};
