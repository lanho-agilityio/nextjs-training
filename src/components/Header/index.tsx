'use client';
import { memo, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Box, IconButton, Skeleton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Constants
import { COLORS, NAVIGATION_LIST, ROUTES } from '@/constants';

// Components
import { Link, NavLink, Image } from '@/components';

// Hooks
import { useAuthContext } from '@/hooks';

const LoginButton = dynamic(() => import('./LoginButton'), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" height={18} width={56} />,
});
const UserProfile = dynamic(() => import('./UserProfile'), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" height={18} width={56} />,
});

const NavBar = (): JSX.Element => {
  const { push } = useRouter();
  const { user, login, logout } = useAuthContext();

  const [open, setOpen] = useState(false);

  const HALF = Math.ceil(NAVIGATION_LIST.length / 2);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const renderUserButton = () => {
    return user ? <UserProfile onLogoutClick={logout} onCreatePostClick={push} /> : <LoginButton onSubmit={login} />;
  };

  return (
    <nav>
      <Box
        sx={{
          paddingX: { sm: 0, md: '20px' },
          paddingTop: { xs: '20px', sm: '20px', md: '32px' },
          paddingBottom: { xs: '20px', sm: '20px', md: '32px' },
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '40px',
          justifyContent: { xs: 'space-between', sm: 'space-between', md: 'center' },
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          {NAVIGATION_LIST.slice(0, HALF).map((e, i) => {
            return <NavLink key={i} to={e.to} title={e.title} />;
          })}
        </Box>
        <Link aria-label="Homepage" href={ROUTES.HOME} style={{ width: '112px' }}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={132}
            height={52}
            unoptimized
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          ></Image>
        </Link>
        <IconButton
          aria-label="menu"
          size="large"
          onClick={handleClick}
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
            paddingX: '8px',
            paddingY: '4px',
            borderRadius: '6px',
            color: COLORS.DEFAULT_TEXT,
          }}
        >
          {open ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
        </IconButton>
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {NAVIGATION_LIST.slice(HALF).map((e, i) => {
            return <NavLink key={i} to={e.to} title={e.title} />;
          })}
          <Box
            sx={{
              paddingRight: { md: '20px' },
              width: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {renderUserButton()}
          </Box>
        </Box>
      </Box>
      {open && (
        <Box
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'none',
            },
            flexDirection: 'column',
            gap: '16px',
            paddingBottom: '20px',
          }}
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
          <Box>{renderUserButton()}</Box>
        </Box>
      )}
    </nav>
  );
};

export default memo(NavBar);
