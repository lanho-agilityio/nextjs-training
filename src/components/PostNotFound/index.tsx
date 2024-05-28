'use client';
import { Box, Typography } from '@mui/material';

// Constants
import { COLORS, ERROR_MESSAGES, ROUTES } from '@/constants';

// Components
import { Heading } from '../Common';
import NavLink from '../Header/NavLink';

// Hooks
import { useAuthContext } from '@/hooks';

const PostNotFound = (): JSX.Element => {
  const { user } = useAuthContext();

  return (
    <Box sx={{ textAlign: 'center', paddingY: '100px' }}>
      <Heading title={ERROR_MESSAGES.POST_NOT_FOUND} />
      {user ? (
        <NavLink title="Create a post?" to={ROUTES.CREATE} _style={{ color: COLORS.POST_LINK, fontSize: '18px' }} />
      ) : (
        <Typography>Please sign in or sign up to create your post.</Typography>
      )}
    </Box>
  );
};

export default PostNotFound;
