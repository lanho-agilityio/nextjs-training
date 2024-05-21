import Image from 'next/image';
import { Box } from '@mui/material';

// Constants
import { NAVIGATION_LIST, ROUTES } from '@/constants';

// Components
import { Link, NavLink } from '@/components';
import UserButton from '../../UserButton';

const NavBarDesktop = (): JSX.Element => {
  const HALF = Math.ceil(NAVIGATION_LIST.length / 2);

  return (
    <Box
      sx={{
        paddingX: '20px',
        paddingY: '32px',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'flex',
        },
        flexWrap: 'nowrap',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        {NAVIGATION_LIST.slice(0, HALF).map((e, i) => {
          return <NavLink key={i} to={e.to} title={e.title} />;
        })}
      </Box>
      <Link href={ROUTES.HOME} style={{ width: '112px' }}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={132}
          height={52}
          priority
          style={{ maxWidth: '100%', height: 'auto' }}
        ></Image>
      </Link>
      <Box sx={{
         justifyContent: 'center',
         alignItems: 'center',
      }}>
        {NAVIGATION_LIST.slice(HALF).map((e, i) => {
          return <NavLink key={i} to={e.to} title={e.title} />;
        })}
        <UserButton />
      </Box>
    </Box>
  );
};

export default NavBarDesktop;
