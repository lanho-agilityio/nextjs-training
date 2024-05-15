import Image from 'next/image';
import { Box } from '@mui/material';
import { NAVIGATION_LIST } from '@/constants';
import NavLink from '../../NavLink';
import Link from 'next/link';

const NavBarDesktop = (): JSX.Element => {
  const HALF = Math.ceil(NAVIGATION_LIST.length / 2);

  return (
    <Box
      paddingX="32px"
      paddingY="20px"
      display={{
        xs: 'none',
        sm: 'none',
        md: 'flex',
      }}
      flexWrap="nowrap"
      gap="40px"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        {NAVIGATION_LIST.slice(0, HALF).map((e, i) => {
          return <NavLink key={i} to={e.to} title={e.title} />;
        })}
      </Box>
      <Link href="/" style={{ width: '112px' }}>
        <Image
          src={'/logo.svg'}
          alt="Logo"
          width={132}
          height={52}
          priority
          style={{ maxWidth: '100%', height: 'auto' }}
        ></Image>
      </Link>
      <Box>
        {NAVIGATION_LIST.slice(HALF).map((e, i) => {
          return <NavLink key={i} to={e.to} title={e.title} />;
        })}
      </Box>
    </Box>
  );
};

export default NavBarDesktop;
