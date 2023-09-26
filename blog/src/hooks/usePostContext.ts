import { useContext } from 'react';
import { PostContextType } from '../types/postContext';
import { PostContext } from '../contexts/post/postProvider';

export const usePostContext = (): PostContextType => {
  const postContext = useContext(PostContext);
  return postContext!;
};
