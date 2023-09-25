import { Tag } from './tag';

export type Filter = {
  search: string;
  // userId?: string;
  tag?: Tag | null;
  // dateCreated?: Date;
};
