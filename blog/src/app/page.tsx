/** @jsxImportSource @emotion/react */
'use client';
import { useEffect } from 'react';
import PostList from '../components/PostList';
import { usePostContext } from '../hooks/usePostContext';

export default function Home() {
  const { queryPosts, changeParams } = usePostContext();

  useEffect(() => {
    changeParams({
      search: '',
      tag: []
    });
  }, [changeParams]);

  if (queryPosts.error) return <div>failed to load</div>;
  if (queryPosts.isLoading) return <div>loading...</div>;
  return (
    <main>
      <PostList
        data={
          queryPosts.data instanceof Error || queryPosts.data === undefined
            ? []
            : queryPosts.data
        }
      />
    </main>
  );
}
