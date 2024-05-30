import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// APIs
import { queryAllPosts } from '@/services';

// Constants
import { COLORS, PER_PAGE_HOME, ROUTES } from '@/constants';

// Components
import { PostList, Link, FailToLoad, Heading } from '@/components';

const PostNotFound = dynamic(() => import('../components/PostNotFound'), {
  ssr: false,
  loading: () => <Box sx={{ textAlign: 'center', height: '150px' }}></Box>,
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'See most recent posts we have ever written',
  openGraph: {
    type: 'website',
    title: 'Homepage',
    description: 'See most recent posts we have ever written',
  }
};

export default async function Home() {
  const { data, total, errorMessage } = await queryAllPosts(undefined, PER_PAGE_HOME);

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  if (total === 0) {
    return <PostNotFound />;
  }

  return (
    <main>
      <Heading title="Our Blog" description="This is where we talk things & speak our mind." />
      <Box sx={{ marginTop: '40px' }}>
        <PostList posts={data} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        <Link
          id="view-all-posts"
          aria-label="View all posts"
          href={ROUTES.ARCHIVE}
          _style={{
            color: COLORS.DESCRIPTION,
            border: `1px solid ${COLORS.DESCRIPTION}`,
            borderRadius: '6px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            paddingRight: '12px',
            textDecoration: 'none',
          }}
        >
          View All Posts
        </Link>
      </Box>
    </main>
  );
}
