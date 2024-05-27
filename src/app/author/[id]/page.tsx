import { Suspense, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Avatar, Box } from '@mui/material';

// APIs
import { queryAllPosts } from '@/services';

// Components
import { PostList, Heading, FailToLoad } from '@/components';

// Models
import { Author } from '@/models';

const Pagination = dynamic(() => import('../../../components/Pagination'), { ssr: false });

export default async function AuthorPage({ params }: { params: { id: string } }) {
  const postsResult = await queryAllPosts({ authorId: params.id });
  const { data: posts, total: totalPosts, errorMessage } = postsResult;

  const author: Author = useMemo(() => (posts.length > 0 && posts[0].user) || { id: '', username: '' }, [posts]);

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  return (
    <main>
      <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar src="" alt="avatar" sx={{ width: 80, height: 80 }} />
        <Heading title={author.username} />
      </Box>

      <Box sx={{ marginTop: '40px' }}>
        <PostList posts={posts} isArchived={true} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Pagination totalPosts={totalPosts} />
          </Suspense>
        </Box>
      </Box>
    </main>
  );
}
