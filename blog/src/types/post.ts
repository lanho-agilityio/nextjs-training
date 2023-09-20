import { Tag } from './tag';

export type Post = {
  id: string;
  userId: string;
  title: string;
  content: string;
  imageBase64: string;
  imagePath: string;
  imageFile: File | undefined;
  tag: Tag | null;
  dateCreated: Date;
};

export type AddPost = Pick<Post, 'title' | 'content' | 'imageFile' | 'tag'>;

export type UpdatePost = Post;
