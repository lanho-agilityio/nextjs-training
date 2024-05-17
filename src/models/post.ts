export type PostTag = {
  id: string;
  title: string;
  color: string;
};

export type Author = {
  id: string;
  name: string;
};

export type Post = {
  id: string;
  title: string;
  tag: PostTag;
  author: Author;
  pictureName?: string;
  pictureSrc: string;
  content: string;
  updatedAt: Date | string;
};
