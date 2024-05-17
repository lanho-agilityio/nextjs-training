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
  pictureSrc: string;
  updatedAt: Date | string;
};
