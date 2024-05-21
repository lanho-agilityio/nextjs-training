'use client';
import { useState } from 'react';
import { Box, Container, Popover, Typography } from '@mui/material';

// Constants
import { COLORS, ROUTES } from '@/constants';

// Components
import LoginForm from '../../LoginForm';
import NavLink from '../NavLink';
import { Button } from '../../Common';

const UserButton = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-popover' : undefined;

  return (
    <>
      <Button
        type='button'
        variant='text'
        aria-describedby={id}
        onClick={handleClick}
        backgroundColor='white'
        hoverColor='unset'
        sx={{
          color: COLORS.NAV_LINK_PRIMARY,
          fontFamily: 'inherit',
          marginLeft: '10px',
          fontSize: '14px',
          fontWeight: 500,
          textTransform: 'capitalize',
          ':hover': {
            bgcolor: 'unset',
            color: COLORS.NAV_LINK_HOVER
          },
        }}
        
      >
        Login
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Container sx={{ minHeight: '200px', paddingY: '25px' }}>
          <LoginForm />
          <Box
            sx={{
              paddingTop: '10px',
              fontSize: '12px',
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>Need an account?</Typography>
            <NavLink to={ROUTES.SIGN_UP} title="Sign up" />
          </Box>
        </Container>
      </Popover>
      {/* <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 3 }} /> */}
    </>
  );
};

export default UserButton;
