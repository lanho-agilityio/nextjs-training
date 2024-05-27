import { Metadata } from 'next';
import { Box } from '@mui/material';

// APIs
import { queryAllPosts } from '@/services';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import { PostList, Link, FailToLoad } from '@/components';

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
      <PostList posts={data} />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <Link
          id="view-all-posts"
          href={ROUTES.POSTS}
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
