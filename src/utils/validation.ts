// Constants
import { ERROR_MESSAGES } from '@/constants';

export const isRequired = (value: string | null | undefined): boolean => !!value;

export const validateRequired = (value: string | null | undefined): string | true =>
  isRequired(value?.trim()) || ERROR_MESSAGES.FIELD_REQUIRED;
