import { useState } from 'react';
import { Popover } from '@mui/material';

// Components
import { LinkButton } from '../../Common/Button';

// Models
import { UserSession } from '@/models';

interface UserProfileProps {
  user: UserSession;
  onClick: () => void;
}

const UserProfile = ({ user, onClick }: UserProfileProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-profile-popover' : undefined;
  const { username: name } = user;

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
        <LinkButton onClick={onClick}>Logout</LinkButton>
      </Popover>
    </>
  );
};

export default UserProfile;
