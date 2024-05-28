import { Metadata } from 'next';
import { Box } from '@mui/material';

// APIs
import { queryAllPosts } from '@/services';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { PostList, Link, FailToLoad, Heading } from '@/components';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Homepage',
};

export default async function Home() {
  const { data, errorMessage } = await queryAllPosts();

  if (errorMessage) {
    return <FailToLoad error={errorMessage} />;
  }

  return (
    <main>
      <Heading title="Our Blog" description="This is where we talk things & speak our mind." />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40px',
          gap: '40px',
        }}
      >
        <PostList posts={data} />

        <Link
          id="view-all-posts"
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
