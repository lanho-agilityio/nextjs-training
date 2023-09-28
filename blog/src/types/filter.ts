import { Tag } from '@/Ttypes/tag';
import { User } from '@/Ttypes/user';

export type Filter = {
  search: string;
  users: User[];
  tags: Tag[];
  // dateCreated?: Date;
};
