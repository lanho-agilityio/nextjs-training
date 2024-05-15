export type PostTag = {
  title: string;
  color: string;
};

export type Author = {
  name: string;
  profilePicture: string;
};

export type Post = {
  id: string;
  title: string;
  tag: PostTag;
  author: Author;
  pictureSrc: string;
  updatedAt: Date | string;
};
