import { AddPost, EditPost } from '@/Ttypes/post';

export interface PostContextType {
  add: (
    values: AddPost,
    handleSuccess: (response: AddPost) => void,
    handleError: (e: unknown) => void
  ) => void;
  edit: (
    values: EditPost,
    handleSuccess: (response: EditPost) => void,
    handleError: (e: unknown) => void
  ) => void;
}
