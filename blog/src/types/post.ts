import { Tag } from './tag';

export type Post = {
  id: string;
  userId: string;
  title: string;
  content: string;
  imageBase64: string;
  imagePath: string;
  tags: Tag[];
  dateCreated: Date;
};

export type CreatePost = Omit<Post, 'id'>;

export type UpdatePost = Post;
