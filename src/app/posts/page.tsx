import { Box } from '@mui/material';

// Constants
import { COLORS, MOCK_POSTS_LIST, ROUTES } from '@/constants';

// Components
import { PostList, Link, Heading } from '@/components';

export default function ArchivePage() {
  return (
    <main>
      <Heading title="Archive" description="See all posts we have ever written." />
      <Box sx={{ paddingTop: '40px' }}>
        <PostList posts={MOCK_POSTS_LIST} isArchived={true} />
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
      </Box>
    </main>
  );
}
