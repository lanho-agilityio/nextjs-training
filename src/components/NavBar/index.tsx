import Image from 'next/image';
import { Box } from '@mui/material';
import { NAVIGATION_LIST } from '@/constants';
import NavLink from '../NavLink';
import NavBarMobile from '../NavBarMobile';

const NavBar = (): JSX.Element => {
  const HALF = Math.ceil(NAVIGATION_LIST.length / 2);

  return (
    <nav>
      <Box
        paddingX="2rem"
        paddingY="1.25rem"
        flexWrap="nowrap"
        gap="2.5rem"
        justifyContent="center"
        alignItems="center"
        display={{
          xs: 'none',
          sm: 'none',
          md: 'flex',
        }}
      >
        <Box>
          {NAVIGATION_LIST.slice(0, HALF).map((e, i) => {
            return <NavLink key={i} to={e.to} title={e.title} />;
          })}
        </Box>
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
        <Box>
          {NAVIGATION_LIST.slice(HALF).map((e, i) => {
            return <NavLink key={i} to={e.to} title={e.title} />;
          })}
        </Box>
      </Box>
      <NavBarMobile />
    </nav>
  );
};

export default NavBar;
