'use client';
import { Box, Typography } from '@mui/material';

// Constants
import { COLORS, ERROR_MESSAGES, ROUTES } from '@/constants';

// Components
import { Heading, NavLink } from '@/components';

// Hooks
import { useAuthContext } from '@/hooks';

const PostNotFound = (): JSX.Element => {
  const { user } = useAuthContext();

  return (
    <Box sx={{ textAlign: 'center', paddingY: '100px' }}>
      <Heading title={ERROR_MESSAGES.POST_NOT_FOUND} />
      {user ? (
        <NavLink
          title="Create a post?"
          to={ROUTES.UPSERT_POST('')}
          linkStyle={{ color: COLORS.POST_LINK, fontSize: '18px' }}
        />
      ) : (
        <Typography>Please sign in or sign up to create your post.</Typography>
      )}
    </Box>
  );
};

export default PostNotFound;
