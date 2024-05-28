import { memo, useCallback, useState } from 'react';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Divider, Popover, Stack } from '@mui/material';

// Constants
import { ROUTES } from '@/constants';

// Components
import { LinkButton } from '../../Common/Button';

// Models
import { UserSession } from '@/models';

interface UserProfileProps {
  user: UserSession;
  onCreatePostClick: (href: string, options?: NavigateOptions | undefined) => void;
  onLogoutClick: () => void;
}

const UserProfile = ({ user, onLogoutClick, onCreatePostClick }: UserProfileProps): JSX.Element => {
  const { username: name } = user;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'user-profile-popover' : undefined;

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleCreatePostClick = useCallback(() => {
    onCreatePostClick(ROUTES.CREATE);
  }, [onCreatePostClick]);

  return (
    <>
      <LinkButton onClick={handleClick} sx={{ padding: 0, paddingTop: '4px' }}>
        Hello {name}!
      </LinkButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          borderRadius: '6px',
        }}
      >
        <Stack gap="5x" divider={<Divider orientation="horizontal" flexItem />} sx={{ margin: '10px' }}>
          <LinkButton onClick={handleCreatePostClick}>Write a post</LinkButton>
          <LinkButton onClick={onLogoutClick}>Logout</LinkButton>
        </Stack>
      </Popover>
    </>
  );
};

export default memo(UserProfile);
