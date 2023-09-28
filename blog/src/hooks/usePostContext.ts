import { useContext } from 'react';
//Contexts
import { PostContext } from '@/contexts/post/postProvider';
//Types
import { PostContextType } from '@/Ttypes/postContext';

export const usePostContext = (): PostContextType => {
  const postContext = useContext(PostContext);
  return postContext!;
};
