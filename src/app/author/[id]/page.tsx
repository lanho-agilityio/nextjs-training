import { Suspense } from 'react';
import { Avatar, Box } from '@mui/material';

// Components
import { PostList, Heading, Pagination } from '@/components';

// Models
import { Author } from '@/models';

// Utils
import { generateSearchParams } from '@/utils';

export default async function AuthorPage({ params }: { params: { id: string } }) {
  const filter = generateSearchParams({ authorId: params.id });

  const postRes = await fetch(`http://localhost:3000/posts/apis?${filter}`);
  const postResults = await postRes.json();
  const posts = postResults || [];
  const totalPosts = Number(postRes.headers.get('x-total-count')) || 0;

  const author: Author = posts.length > 0 ? posts[0].user : {};

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
