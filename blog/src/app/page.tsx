import { lazy } from 'react';
//Services
import { queryAllPosts } from '@/services/post';
//Components
const PostList = lazy(() => import('@/components/PostList'));

const HomePage = async () => {
  const data = await queryAllPosts();

  return (
    <PostList data={data instanceof Error || data === undefined ? [] : data} />
  );
};

export default HomePage;
