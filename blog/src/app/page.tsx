import PostList from '../components/PostList';
import { queryAllPosts } from '../services/post';

const HomePage = async () => {
  const data = await queryAllPosts();

  return (
    <PostList data={data instanceof Error || data === undefined ? [] : data} />
  );
};

export default HomePage;
