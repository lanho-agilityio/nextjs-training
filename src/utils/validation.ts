// Constants
import { ERROR_MESSAGES } from '@/constants';

export const isRequired = (value: string | null | undefined): boolean => !!value;

export const validateRequired = (value: string | null | undefined): string | true =>
  isRequired(value?.trim()) || ERROR_MESSAGES.FIELD_REQUIRED;

export const validateMatched = (value: string | null | undefined, compared: string, field: string): string | true =>
  (isRequired(value?.trim()) && value === compared) || ERROR_MESSAGES.FIELD_MATCHED(field);