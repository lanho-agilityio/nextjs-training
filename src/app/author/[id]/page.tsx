import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Avatar, Box } from '@mui/material';

// APIs
import { queryAuthor, queryAllPosts } from '@/services';

// Components
import { Heading, FailToLoad, PostTableSkeleton } from '@/components';

// Models
import { Author, SearchParams } from '@/models';

const PostTable = dynamic(() => import('../../../components/PostTable'), {
  loading: () => <PostTableSkeleton />,
});

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  const response = await queryAuthor(id);

  if (response.data) {
    const { username } = response.data;
    return {
      title: `Author: ${username}`,
      description: `See all posts written by ${username}`,
      keywords: [
        'posts',
        username
      ],
      openGraph: {
        type: 'website',
        title: `Author: ${username}`,
        description: `See all posts written by ${username}`,
      }
    };
  }
  return {
    title: `AuthorId: ${id}`,
    description: `See all posts written by id: ${id}`,
  };
}

export default async function AuthorPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: SearchParams;
}) {
  const postsResult = await queryAllPosts({ authorId: params.id, ...searchParams });
  const { data: posts, total: totalPosts, errorMessage } = postsResult;

  const author: Author = (posts.length > 0 && posts[0].user) || { id: '', username: '' };

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  return (
    <main>
      <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar src="" alt="avatar" sx={{ width: 80, height: 80 }} />
        <Heading title={author.username} />
      </Box>
      <PostTable posts={posts} totalPosts={totalPosts} isFiltered={false} />
    </main>
  );
}
