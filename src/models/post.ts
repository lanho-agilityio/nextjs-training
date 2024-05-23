import { User } from './user';

export type PostCategory = {
  id: string;
  value: string;
  color?: string;
};

export type Author = Pick<User, 'id' | 'username'>;

export type Post = {
  id: string;
  title: string;
  tag: PostCategory;
  imageName?: string;
  imageBase64: string;
  content: string;
  updatedAt: Date | string;
  userId: string;
  user: Author;
};
