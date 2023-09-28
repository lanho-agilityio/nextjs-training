import { Tag } from './tag';
import { User } from './user';

export type Filter = {
  search: string;
  users: User[];
  tags: Tag[];
  // dateCreated?: Date;
};
