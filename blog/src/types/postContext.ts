import { Dispatch, SetStateAction } from 'react';
import { Filter } from './filter';
import { AddPost, EditPost, Post } from './post';
import { SWRResponse } from 'swr';

export interface PostContextType {
  searchPosts: SWRResponse<Error | Post[], any, any>;
  params: Filter | null;
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
  changeParams: Dispatch<SetStateAction<Filter | null>>;
}
