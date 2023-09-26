import { Tag } from './tag';

export type Post = {
  id: string;
  userId: string;
  title: string;
  content: string;
  imageBase64: string;
  imageName: string;
  imageFile?: File | undefined;
  tag: Tag | null;
  dateCreated: Date;
  user: {
    id: string;
    email: string;
    password: string;
    name: string;
  };
};

export type AddPost = Pick<
  Post,
  'userId' | 'title' | 'content' | 'imageFile' | 'tag'
>;

export type EditPost = Omit<Post, 'user'>;
