import { Box } from '@mui/material';

// Constants
import { COLORS, MOCK_POSTS_LIST, ROUTES } from '@/constants';

// Components
import { PostList, Link } from '@/components';

export default function Home() {
  return (
    <main>
      <PostList posts={MOCK_POSTS_LIST} />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <Link
          id="view-all-posts"
          href={ROUTES.POSTS}
          style={{
            color: COLORS.DESCRIPTION,
            border: `1px solid ${COLORS.DESCRIPTION}`,
            borderRadius: '6px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            paddingRight: '12px',
            textDecoration: 'none'
          }}
        >
          View All Posts
        </Link>
      </Box>
    </main>
  );
}
