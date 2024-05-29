'use client';
import { memo, useCallback, useState } from 'react';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Divider, Popover, Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Constants
import { ROUTES } from '@/constants';

// Components
import { LinkButton } from '../../Common/Button';

interface UserProfileProps {
  onCreatePostClick: (href: string, options?: NavigateOptions | undefined) => void;
  onLogoutClick: () => void;
}

const UserProfile = ({ onLogoutClick, onCreatePostClick }: UserProfileProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'user-profile-popover' : undefined;

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleCreatePostClick = useCallback(() => {
    onCreatePostClick(ROUTES.CREATE_POST);
  }, [onCreatePostClick]);

  return (
    <>
      <LinkButton
        onClick={handleOpenPopover}
        sx={{
          padding: 0,
          paddingTop: '4px',
          height: { xs: '18px', sm: '18px', md: 'inherit' },
          width: '100px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        startIcon={<AccountCircleIcon sx={{ height: 25, width: 25 }} />}
        endIcon={<ArrowDropDownIcon />}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
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
