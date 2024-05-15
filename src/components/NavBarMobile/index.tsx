'use client';
import { useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, styled } from '@mui/material';

import { NAVIGATION_LIST } from '@/constants';
import NavLink from '@/components/NavLink';

const NavBarMobile = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box paddingX="32px" paddingY="20px">
      <Box
        display={{
          xs: 'flex',
          sm: 'flex',
          md: 'none',
        }}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <a href="/" style={{ width: '7rem' }}>
          <Image
            src={'/logo.svg'}
            alt="Logo"
            width={132}
            height={52}
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          ></Image>
        </a>
        <IconButton
          aria-label="menu"
          size="large"
          onClick={handleClick}
          sx={{
            paddingX: '0.5rem',
            paddingY: '0.25rem',
            borderRadius: '0.375rem',
            color: '#6b7280',
          }}
        >
          {open ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
        </IconButton>
      </Box>
      {open && (
        <Box
          display={{
            xs: 'flex',
            sm: 'flex',
            md: 'none',
          }}
          flexDirection="column"
          marginTop="10px"
        >
          {NAVIGATION_LIST.map((route, i) => {
            return (
              <NavLink
                key={i}
                to={route.to}
                title={route.title}
                _style={{
                  paddingLeft: 0,
                  
                }}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default NavBarMobile;
